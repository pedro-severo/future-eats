import { renderHook } from '@testing-library/react-hooks';
import * as useCustomHook from '../useRegisterSchema';
import { useRegisterPage } from '../useRegisterPage';
import * as useUserState from '../../../../global/redux/user';
import { USER_ACTION_TYPES } from '../../../../global/redux/user/interface';

const schemaMock = {
    password: 'password',
    email: 'email',
};

const mockHandleMockRegister = jest.fn();

jest.mock('../../../../services/api/register/useRegisterRequest', () => ({
    useRegisterRequest: () => ({ handleRegister: mockHandleMockRegister }),
}));

const mockUserDispatch = jest.fn();

describe('useRegisterPage', () => {
    beforeEach(() => {
        jest.spyOn(useCustomHook, 'useRegisterSchema').mockImplementation(
            () => {
                return {
                    schema: schemaMock,
                };
            }
        );
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
        const { result } = renderHook(() => useRegisterPage());
        await result.current.onSubmitForm(schemaMock);
        expect(mockHandleMockRegister).toBeCalledWith(schemaMock);
    });
    it('call onCloseAlert correctly', async () => {
        const { result } = renderHook(() => useRegisterPage());
        await result.current.onCloseAlert();
        expect(mockUserDispatch).toBeCalledWith({
            type: USER_ACTION_TYPES.RESET_STATE,
        });
    });
});
