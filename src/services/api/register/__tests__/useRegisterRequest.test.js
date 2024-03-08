import { renderHook } from '@testing-library/react-hooks';
import { useRegisterRequest } from '../useRegisterRequest';
import * as useUserState from '../../../../global/user/context';
import * as usePagesNavigation from '../../../../hooks/usePagesNavigation';

const mockNavigate = jest.fn();
const mockUserDispatch = jest.fn();

jest.mock('../request', () => ({
    register: () => ({
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

const mockRegisterInput = {
    name: 'string',
    email: 'string',
    password: 'string',
    cpf: 'string',
};

describe('useRegisterRequest', () => {
    it('should test handle register calling', async () => {
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
        const { result } = renderHook(() => useRegisterRequest());
        await result.current.handleRegister(mockRegisterInput);
        expect(mockUserDispatch).toBeCalledTimes(2);
        expect(mockNavigate).toBeCalledTimes(1);
    });
    // TODO: create a test to error case
});
