import { cpfValidation } from '../customValidations';

describe('yup custom validations', () => {
    describe('cpf validation', () => {
        it('should return true for a valid CPF', () => {
            const validCPF = '123.456.789-09';
            expect(cpfValidation(validCPF)).toBe(true);
        });

        it('should return false for invalid input type', () => {
            const invalidCPF = null;
            expect(cpfValidation(invalidCPF)).toBe(false);
        });

        it('should return false for an invalid CPF with wrong length', () => {
            const invalidCPF = '123456';
            expect(cpfValidation(invalidCPF)).toBe(false);
        });

        it('should return false for an invalid CPF in the trash list', () => {
            const invalidCPF = '00000000000';
            expect(cpfValidation(invalidCPF)).toBe(false);
        });

        it('should return false for an invalid CPF by unmatch on digit verifying', () => {
            const validCPF = '123.456.789-01';
            expect(cpfValidation(validCPF)).toBe(false);
        });
    });
});
