import * as useCustomHook from '../useLoginSchema';
import { useLoginPage } from '../useLoginPage';
import * as useUserState from '../../../shared/stores/redux/user';
import { USER_ACTION_TYPES } from '../../../shared/stores/redux/user/interface';
import { renderHook } from '@testing-library/react-hooks';
import * as NavigationHeaderContext from '../../../shared/stores/navigationHeader';

const schemaMock = {
    password: 'password',
    email: 'email',
};

const mockHandleMockLogin = jest.fn();

jest.mock('../../../shared/services/api/login/useLoginRequest', () => ({
    useLoginRequest: () => ({ handleLogin: mockHandleMockLogin }),
}));

const mockUserDispatch = jest.fn();

const mockNavigate = jest.fn();

jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            push: mockNavigate,
        };
    },
}));

const mockSetNavigationHeader = jest.fn();

describe('useLoginPage', () => {
    beforeEach(() => {
        jest.spyOn(useCustomHook, 'useLoginSchema').mockImplementation(() => {
            return {
                schema: schemaMock,
            };
        });
        jest.spyOn(useUserState, 'useUserState').mockImplementation(() => {
            return {
                userDispatch: mockUserDispatch,
                userState: {
                    hasError: false,
                },
            };
        });
        jest.spyOn(
            NavigationHeaderContext,
            'useNavigationHeaderState'
        ).mockImplementation(() => ({
            setNavigationHeader: mockSetNavigationHeader,
        }));
    });
    it('call onSubmit correctly', async () => {
        const { result } = renderHook(() => useLoginPage());
        await result.current.onSubmitForm(schemaMock);
        expect(mockHandleMockLogin).toBeCalledWith(schemaMock);
    });
    it('call onCloseAlert correctly', async () => {
        const { result } = renderHook(() => useLoginPage());
        await result.current.onCloseAlert();
        expect(mockUserDispatch).toBeCalledWith({
            type: USER_ACTION_TYPES.RESET_STATE,
        });
    });
});
