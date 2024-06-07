import { renderHook } from '@testing-library/react-hooks';
import * as useCustomHook from '../useSignupSchema';
import { useSignupPage } from '../useSignupPage';
import * as useUserState from '../../../shared/stores/redux/user';
import { USER_ACTION_TYPES } from '../../../shared/stores/redux/user/interface';

const schemaMock = {
    password: 'password',
    email: 'email',
};

const mockHandleSignup = jest.fn();

jest.mock('../../../shared/services/api/signup/useSignupRequest', () => ({
    useSignupRequest: () => ({ handleSignup: mockHandleSignup }),
}));

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
    });
    it('call onSubmit correctly', async () => {
        const { result } = renderHook(() => useSignupPage());
        await result.current.onSubmitForm(schemaMock);
        expect(mockHandleSignup).toBeCalledWith(schemaMock);
    });
    it('call onCloseAlert correctly', async () => {
        const { result } = renderHook(() => useSignupPage());
        await result.current.onCloseAlert();
        expect(mockUserDispatch).toBeCalledWith({
            type: USER_ACTION_TYPES.RESET_STATE,
        });
    });
});
