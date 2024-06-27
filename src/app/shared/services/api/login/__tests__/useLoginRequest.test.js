import { renderHook } from '@testing-library/react-hooks';
import { useLoginRequest } from '../useLoginRequest';
import * as useUserState from '../../../../../shared/stores/redux/user';
import { USER_ACTION_TYPES } from '../../../../../shared/stores/redux/user/interface';
import PATH from '../../../../constants/pathsEnum';

const mockNavigate = jest.fn();

jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            push: mockNavigate,
        };
    },
}));

const mockUserDispatch = jest.fn();

const mockUserDto = {
    id: 'id',
    cpf: 'cpf',
    email: 'email',
    hasAddress: false,
    name: 'name',
};

const mockToken = 'mockToken';

const mockLogin = jest.fn().mockImplementation(() => ({
    data: {
        login: {
            data: {
                user: mockUserDto,
                token: mockToken,
            },
        },
    },
}));

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
            payload: {
                user: mockUserDto,
                token: mockToken,
            },
        });
        expect(mockNavigate).toBeCalledWith(PATH.DASHBOARD);
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
            alertMessage: 'foo',
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
