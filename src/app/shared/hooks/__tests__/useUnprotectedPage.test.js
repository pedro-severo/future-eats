import { renderHook } from '@testing-library/react-hooks';
import { useUnprotectedPage } from '../useUnprotectedPage';
import PATH from '../../constants/pathsEnum';
import * as useUserState from '../../stores/redux/user';
import * as useCookies from '../../services/cookies';

const token = 'token';

const mockPush = jest.fn();
const mockHandleAuthentication = jest.fn();

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

describe('useUnprotectedPage tests suite', () => {
    beforeEach(() => {
        jest.spyOn(useUserState, 'useUserState').mockImplementation(() => {
            return {
                userState: {
                    token: token,
                    isAuthenticated: undefined,
                },
            };
        });
    });
    it('should call handleAuthentication', () => {
        renderHook(() => useUnprotectedPage());
        expect(mockHandleAuthentication).toBeCalledWith(token);
    });
    it('should call handleAuthentication with token from cookies', () => {
        jest.spyOn(useUserState, 'useUserState').mockImplementation(() => {
            return {
                userState: {
                    token: '',
                    isAuthenticated: undefined,
                },
            };
        });
        jest.spyOn(useCookies, 'useCookies').mockImplementation(() => {
            return {
                get: () => 'tokenFromCookies',
            };
        });
        renderHook(() => useUnprotectedPage());
        expect(mockHandleAuthentication).toBeCalledWith('tokenFromCookies');
    });
    it('should call push function and navigate to dashboard', () => {
        jest.spyOn(useUserState, 'useUserState').mockImplementation(() => {
            return {
                userState: {
                    isAuthenticated: true,
                },
            };
        });
        renderHook(() => useUnprotectedPage());
        expect(mockPush).toBeCalledWith(PATH.DASHBOARD);
    });
});
