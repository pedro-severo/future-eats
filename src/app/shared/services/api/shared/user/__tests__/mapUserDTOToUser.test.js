import { mapUserDTOToUser } from '../mapUserDTOToUser';

describe('mapUserDTOToUser test', () => {
    it('should return a User with properties', () => {
        const user = mapUserDTOToUser({
            id: 'id',
            cpf: 'cpf',
            email: 'email',
            hasAddress: false,
            name: 'name',
        });
        expect(user.id).toBe('id');
        expect(user.cpf).toBe('cpf');
        expect(user.email).toBe('email');
        expect(user.hasAddress).toBe(false);
        expect(user.name).toBe('name');
    });
    it('should return a User without properties', () => {
        const user = mapUserDTOToUser(undefined);
        expect(user.id).toBe('');
        expect(user.cpf).toBe('');
        expect(user.email).toBe('');
        expect(user.hasAddress).toBe(false);
        expect(user.name).toBe('');
    });
});
