import { renderHook } from '@testing-library/react-hooks';
import * as useUserState from '../../../../../shared/stores/redux/user';
import { USER_ACTION_TYPES } from '../../../../stores/redux/user/interface';
import * as useCookies from '../../../cookies';
import { useAuthenticateRequest } from '../useAuthenticateRequest';
import * as authenticateQuery from '../authenticateQuery';

const mockUserDispatch = jest.fn();

const mockUserDto = {
    id: 'id',
    cpf: 'cpf',
    email: 'email',
    hasAddress: false,
    name: 'name',
};

const mockToken = 'mockToken';

const mockAuthenticateQuery = jest.fn().mockImplementation(() => ({
    user: mockUserDto,
}));

const mockSetCookies = jest.fn();

describe('useAuthenticateRequest', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.spyOn(useUserState, 'useUserState').mockImplementation(() => {
            return {
                userDispatch: mockUserDispatch,
            };
        });
        jest.spyOn(useCookies, 'useCookies').mockImplementation(() => {
            return {
                set: mockSetCookies,
            };
        });
        jest.spyOn(authenticateQuery, 'authenticateQuery').mockImplementation(
            (token) => mockAuthenticateQuery(token)
        );
    });

    it('should call handleAuthentication correctly', async () => {
        const { result } = renderHook(() => useAuthenticateRequest());
        await result.current.handleAuthentication(mockToken);
        expect(mockAuthenticateQuery).toBeCalledWith(mockToken);
        expect(mockUserDispatch).toBeCalledWith({
            type: USER_ACTION_TYPES.AUTHENTICATE_SUCCESS,
            payload: {
                user: mockUserDto,
                token: mockToken,
            },
        });
        expect(mockSetCookies).toBeCalledWith(
            useCookies.COOKIES_LABEL.TOKEN,
            mockToken,
            {
                expires: 7,
                secure: true,
            }
        );
    });
    it('should call handleAuthentication with error', async () => {
        const mockError = jest.fn().mockRejectedValueOnce(new Error('foo'));
        jest.spyOn(authenticateQuery, 'authenticateQuery').mockImplementation(
            () => mockError()
        );
        const { result } = renderHook(() => useAuthenticateRequest());
        await result.current.handleAuthentication(mockToken);
        expect(mockUserDispatch).toBeCalledWith({
            type: USER_ACTION_TYPES.USER_FAILURE,
            alertMessage: 'foo',
        });
    });
});
