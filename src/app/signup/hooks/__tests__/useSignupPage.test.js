import { renderHook } from '@testing-library/react-hooks';
import * as useCustomHook from '../useSignupSchema';
import { useSignupPage } from '../useSignupPage';
import * as useUserState from '../../../shared/stores/redux/user';
import { USER_ACTION_TYPES } from '../../../shared/stores/redux/user/interface';
import * as useNavigationHeaderState from '../../../shared/stores/navigationHeader';

const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            push: mockPush,
        };
    },
}));

const schemaMock = {
    password: 'password',
    email: 'email',
};

const mockHandleSignup = jest.fn();

jest.mock('../../../shared/services/api/signup/useSignupRequest', () => ({
    useSignupRequest: () => ({ handleSignup: mockHandleSignup }),
}));

jest.mock('../../../shared/hooks/useUnprotectedPage');

const mockUserDispatch = jest.fn();

describe('useSignupPage', () => {
    beforeEach(() => {
        jest.spyOn(useCustomHook, 'useSignupSchema').mockImplementation(() => {
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
            useNavigationHeaderState,
            'useNavigationHeaderState'
        ).mockImplementation(() => {
            return {
                setNavigationHeader: jest.fn(),
            };
        });
    });
    it('call onCloseAlert correctly', async () => {
        const { result } = renderHook(() => useSignupPage());
        await result.current.onCloseAlert();
        expect(mockUserDispatch).toBeCalledWith({
            type: USER_ACTION_TYPES.RESET_STATE,
        });
    });
});
