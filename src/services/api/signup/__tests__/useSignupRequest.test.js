import { renderHook } from '@testing-library/react-hooks';
import { useSignupRequest } from '../useSignupRequest';
import * as useUserState from '../../../../stores/redux/user';
import * as usePagesNavigation from '../../../../hooks/usePagesNavigation';
import { USER_ACTION_TYPES } from '../../../../stores/redux/user/interface';

const mockNavigate = jest.fn();
const mockUserDispatch = jest.fn();
const mockSignup = jest.fn();

const mockSignupInput = {
    name: 'string',
    email: 'string',
    password: 'string',
    cpf: 'string',
};

describe('useSignupRequest', () => {
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
                return [mockSignup, { loading: false }];
            }
        );
    });
    it('should call handleSignup correctly', async () => {
        const { email, password, cpf, name } = mockSignupInput;
        const { result } = renderHook(() => useSignupRequest());
        await result.current.handleSignup(mockSignupInput);
        expect(mockSignup).toBeCalledTimes(1);
        expect(mockSignup).toBeCalledWith({
            variables: { email, password, cpf, name },
        });
        expect(mockUserDispatch).toBeCalledTimes(1);
        expect(mockUserDispatch).toBeCalledWith({
            type: USER_ACTION_TYPES.SIGNUP_SUCCESS,
            payload: undefined,
        });
        expect(mockUserDispatch).not.toBeCalledWith({
            type: USER_ACTION_TYPES.USER_FAILURE,
        });
        expect(mockNavigate).toBeCalledTimes(1);
    });
    it('should call handleSignup with error', async () => {
        const mockError = jest.fn().mockRejectedValueOnce(new Error('foo'));
        jest.spyOn(require('@apollo/client'), 'useMutation').mockImplementation(
            () => {
                return [mockError, { loading: false }];
            }
        );
        const { result } = renderHook(() => useSignupRequest());
        await result.current.handleSignup(mockSignupInput);
        expect(mockUserDispatch).toBeCalledWith({
            type: USER_ACTION_TYPES.USER_FAILURE,
            alertMessage: 'foo',
        });
    });
    it('should call loading side effect', async () => {
        jest.spyOn(require('@apollo/client'), 'useMutation').mockImplementation(
            () => {
                return [mockSignup, { loading: true }];
            }
        );
        renderHook(() => useSignupRequest());
        expect(mockUserDispatch).toBeCalledWith({
            type: USER_ACTION_TYPES.USER_LOADING,
        });
    });
});
