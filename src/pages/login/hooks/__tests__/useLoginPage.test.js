import { renderHook } from '@testing-library/react-hooks';
import * as useCustomHook from '../useLoginSchema';
import { useLoginPage } from '../useLoginPage';

const schemaMock = {
    password: 'password',
    email: 'email',
};

const mockHandleMockLogin = jest.fn();

jest.mock('../../../../api/login/useLoginRequest', () => ({
    useLoginRequest: () => ({ handleLogin: mockHandleMockLogin }),
}));

describe('useLoginSchema', () => {
    beforeEach(() => {
        jest.spyOn(useCustomHook, 'useLoginSchema').mockImplementation(() => {
            return {
                schema: schemaMock,
            };
        });
    });
    it('call onSubmit correctly', async () => {
        const { result } = renderHook(() => useLoginPage());
        await result.current.onSubmitForm(schemaMock);
        expect(mockHandleMockLogin).toBeCalledWith(schemaMock);
    });
});
