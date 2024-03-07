import { renderHook } from '@testing-library/react-hooks';
import { useLoginRequest } from '../useLoginRequest';
import * as useUserState from '../../../global/user/context';
import * as usePagesNavigation from '../../../hooks/usePagesNavigation';

const mockNavigate = jest.fn();
const mockUserDispatch = jest.fn();

jest.mock('../request', () => ({
    login: () => ({
        response: {
            user: {
                id: '',
                name: '',
                email: '',
                password: '',
                hasAddress: false,
                cpf: '',
            },
            token: 'token',
        },
    }),
}));

const mockLoginInput = {
    email: 'email',
    password: 'password',
};

describe('useLoginRequest', () => {
    it('should test handle login calling', async () => {
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
        const { result } = renderHook(() => useLoginRequest());
        await result.current.handleLogin(mockLoginInput);
        expect(mockUserDispatch).toBeCalledTimes(2);
        expect(mockNavigate).toBeCalledTimes(1);
    });
    // TODO: create a test to error case
});
