import { renderHook } from '@testing-library/react-hooks';
import { useLoginRequest } from '../useLoginRequest';
import * as useUserState from '../../../../global/user/context';
import * as usePagesNavigation from '../../../../hooks/usePagesNavigation';
import { USER_ACTION_TYPES } from '../../../../global/user/interface';

const mockNavigate = jest.fn();
const mockUserDispatch = jest.fn();
const mockLogin = jest.fn();

const mockLoginInput = {
    email: 'email',
    password: 'password',
};

describe('useLoginRequest', () => {
    beforeEach(() => {
        jest.spyOn(useUserState, 'useUserState').mockImplementation(() => {
            return {
                userDispatch: mockUserDispatch,
            };
        });
        jest.spyOn(usePagesNavigation, 'usePagesNavigation').mockImplementation(
            () => {
                return {
                    handleGoToHomePage: mockNavigate,
                };
            }
        );
        jest.spyOn(require('@apollo/client'), 'useMutation').mockImplementation(
            () => {
                return [mockLogin, { loading: false }];
            }
        );
    });
    it('should call handleLogin correctly', async () => {
        const { email, password } = mockLoginInput;
        const { result } = renderHook(() => useLoginRequest());
        await result.current.handleLogin(mockLoginInput);
        expect(mockLogin).toBeCalledTimes(1);
        expect(mockLogin).toBeCalledWith({
            variables: { email, password },
        });
        expect(mockUserDispatch).toBeCalledTimes(1);
        expect(mockUserDispatch).toBeCalledWith({
            type: USER_ACTION_TYPES.LOGIN_SUCCESS,
            payload: undefined,
        });
        expect(mockUserDispatch).not.toBeCalledWith({
            type: USER_ACTION_TYPES.USER_FAILURE,
        });
        expect(mockNavigate).toBeCalledTimes(1);
    });
    it('should call handleLogin with error', async () => {
        const mockError = jest.fn().mockRejectedValueOnce(new Error('foo'));
        jest.spyOn(require('@apollo/client'), 'useMutation').mockImplementation(
            () => {
                return [mockError, { loading: false }];
            }
        );
        const { result } = renderHook(() => useLoginRequest());
        await result.current.handleLogin(mockLoginInput);
        expect(mockUserDispatch).toBeCalledWith({
            type: USER_ACTION_TYPES.USER_FAILURE,
        });
    });
    it('should call loading side effect', async () => {
        jest.spyOn(require('@apollo/client'), 'useMutation').mockImplementation(
            () => {
                return [mockLogin, { loading: true }];
            }
        );
        renderHook(() => useLoginRequest());
        expect(mockUserDispatch).toBeCalledWith({
            type: USER_ACTION_TYPES.USER_LOADING,
        });
    });
});
