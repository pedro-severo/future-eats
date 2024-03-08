import { renderHook } from '@testing-library/react-hooks';
import * as useCustomHook from '../useRegisterSchema';
import { useRegisterPage } from '../useRegisterPage';

const schemaMock = {
    password: 'password',
    email: 'email',
};

const mockHandleMockRegister = jest.fn();

jest.mock('../../../../services/api/register/useRegisterRequest', () => ({
    useRegisterRequest: () => ({ handleRegister: mockHandleMockRegister }),
}));

describe('useRegisterPage', () => {
    beforeEach(() => {
        jest.spyOn(useCustomHook, 'useRegisterSchema').mockImplementation(
            () => {
                return {
                    schema: schemaMock,
                };
            }
        );
    });
    it('call onSubmit correctly', async () => {
        const { result } = renderHook(() => useRegisterPage());
        await result.current.onSubmitForm(schemaMock);
        expect(mockHandleMockRegister).toBeCalledWith(schemaMock);
    });
});
