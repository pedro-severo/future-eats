import { renderHook } from '@testing-library/react-hooks';
import { useProtectedPage } from '../useProtectedPage';
import PATH from '../../constants/pathsEnum';
import React from 'react';
import * as useUserState from '../../stores/redux/user';
import * as useCookies from '../../services/cookies';

const token = 'token';

const mockHandleAuthentication = jest.fn();

const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            push: mockPush,
        };
    },
}));

jest.mock('../../services/api/authenticate/useAuthenticateRequest', () => ({
    useAuthenticateRequest: () => ({
        handleAuthentication: mockHandleAuthentication,
    }),
}));

describe('useProtectedPage tests suite', () => {
    beforeEach(() => {
        jest.spyOn(useUserState, 'useUserState').mockImplementation(() => {
            return {
                userState: {
                    token: token,
                    isAuthenticated: undefined,
                },
            };
        });
        jest.clearAllMocks();
    });
    it('should call handleAuthentication', () => {
        renderHook(() => useProtectedPage());
        expect(mockHandleAuthentication).toBeCalledWith(token);
    });
    it('should call handleAuthentication with token from cookies', () => {
        jest.spyOn(useUserState, 'useUserState').mockImplementation(() => {
            return {
                userState: {
                    token: '',
                },
            };
        });
        jest.spyOn(useCookies, 'useCookies').mockImplementation(() => {
            return {
                get: () => 'tokenFromCookies',
            };
        });
        renderHook(() => useProtectedPage());
        expect(mockHandleAuthentication).toBeCalledWith('tokenFromCookies');
    });
    it('should call push function and navigate to login', () => {
        jest.spyOn(useUserState, 'useUserState').mockImplementation(() => {
            return {
                userState: {
                    isAuthenticated: false,
                },
            };
        });
        jest.spyOn(React, 'useMemo').mockResolvedValue('token');
        renderHook(() => useProtectedPage());
        expect(mockPush).toBeCalledWith(PATH.LOGIN);
    });
});
