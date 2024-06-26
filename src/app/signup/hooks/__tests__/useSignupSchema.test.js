import { renderHook } from '@testing-library/react-hooks';
import { useSignupSchema } from '../useSignupSchema';

jest.mock('yup', () => ({
    object: jest.fn(() => ({
        shape: jest.fn(() => ({})),
    })),
    ref: jest.fn(),
    string: jest.fn(() => ({
        min: jest.fn(),
        email: jest.fn(() => ({
            required: jest.fn(),
        })),
        oneOf: jest.fn(() => ({
            required: jest.fn(),
        })),
        matches: jest.fn(),
        cpf: jest.fn(),
        required: jest.fn(() => ({
            min: jest.fn(),
            email: jest.fn(),
            oneOf: jest.fn(),
            matches: jest.fn(),
            cpf: jest.fn(),
        })),
    })),
}));

describe('useSignupSchema test', () => {
    it('should test hook return', () => {
        const { result } = renderHook(() => useSignupSchema());
        expect(result.current.schema).toBeTruthy();
    });
});
