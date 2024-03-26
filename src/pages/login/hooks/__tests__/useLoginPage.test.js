import { renderHook } from '@testing-library/react-hooks';
import * as useCustomHook from '../useLoginSchema';
import { useLoginPage } from '../useLoginPage';
import * as useUserState from '../../../../global/user/context';
import { USER_ACTION_TYPES } from '../../../../global/user/interface';

const schemaMock = {
    password: 'password',
    email: 'email',
};

const mockHandleMockLogin = jest.fn();

jest.mock('../../../../services/api/login/useLoginRequest', () => ({
    useLoginRequest: () => ({ handleLogin: mockHandleMockLogin }),
}));

const mockUserDispatch = jest.fn();

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
    });
    it('call onSubmit correctly', async () => {
        const { result } = renderHook(() => useLoginPage());
        await result.current.onSubmitForm(schemaMock);
        expect(mockHandleMockLogin).toBeCalledWith(schemaMock);
    });
    it('call closeAlert correctly', async () => {
        const { result } = renderHook(() => useLoginPage());
        await result.current.closeAlert();
        expect(mockUserDispatch).toBeCalledWith({
            type: USER_ACTION_TYPES.RESET_STATE,
        });
    });
});
