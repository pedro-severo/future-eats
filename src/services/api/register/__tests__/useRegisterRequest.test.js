import { renderHook } from '@testing-library/react-hooks';
import { useRegisterRequest } from '../useRegisterRequest';
import * as useUserState from '../../../../global/user/context';
import * as usePagesNavigation from '../../../../hooks/usePagesNavigation';
import { USER_ACTION_TYPES } from '../../../../global/user/interface';

const mockNavigate = jest.fn();
const mockUserDispatch = jest.fn();
const mockSignup = jest.fn();

const mockRegisterInput = {
    name: 'string',
    email: 'string',
    password: 'string',
    cpf: 'string',
};

describe('useRegisterRequest', () => {
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
    it('should call handleRegister correctly', async () => {
        const { email, password, cpf, name } = mockRegisterInput;
        const { result } = renderHook(() => useRegisterRequest());
        await result.current.handleRegister(mockRegisterInput);
        expect(mockSignup).toBeCalledTimes(1);
        expect(mockSignup).toBeCalledWith({
            variables: { email, password, cpf, name },
        });
        expect(mockUserDispatch).toBeCalledTimes(1);
        expect(mockUserDispatch).toBeCalledWith({
            type: USER_ACTION_TYPES.REGISTER_SUCCESS,
            payload: undefined,
        });
        expect(mockUserDispatch).not.toBeCalledWith({
            type: USER_ACTION_TYPES.USER_FAILURE,
        });
        expect(mockNavigate).toBeCalledTimes(1);
    });
    it('should call handleRegister with error', async () => {
        const mockError = jest.fn().mockRejectedValueOnce(new Error('foo'));
        jest.spyOn(require('@apollo/client'), 'useMutation').mockImplementation(
            () => {
                return [mockError, { loading: false }];
            }
        );
        const { result } = renderHook(() => useRegisterRequest());
        await result.current.handleRegister(mockRegisterInput);
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
        renderHook(() => useRegisterRequest());
        expect(mockUserDispatch).toBeCalledWith({
            type: USER_ACTION_TYPES.USER_LOADING,
        });
    });
});
