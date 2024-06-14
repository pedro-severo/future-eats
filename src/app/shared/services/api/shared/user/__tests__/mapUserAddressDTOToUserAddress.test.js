import { mapUserAddressDTOToUserAddress } from '../mapUserAddressDTOToUserAddress';

describe('mapUserAddressDTOToUserAddress', () => {
    it('should return a UserAddress with properties', () => {
        const userAddress = mapUserAddressDTOToUserAddress({
            city: 'city',
            complement: 'complement',
            id: 'id',
            state: 'state',
            streetName: 'streetName',
            streetNumber: 'streetNumber',
            zone: 'zone',
        });
        expect(userAddress.id).toBe('id');
        expect(userAddress.city).toBe('city');
        expect(userAddress.complement).toBe('complement');
        expect(userAddress.state).toBe('state');
        expect(userAddress.streetName).toBe('streetName');
        expect(userAddress.streetNumber).toBe('streetNumber');
        expect(userAddress.zone).toBe('zone');
    });
    it('should return a UserAddress without properties', () => {
        const userAddress = mapUserAddressDTOToUserAddress(undefined);
        expect(userAddress.id).toBe('');
        expect(userAddress.city).toBe('');
        expect(userAddress.complement).toBe('');
        expect(userAddress.state).toBe('');
        expect(userAddress.streetName).toBe('');
        expect(userAddress.streetNumber).toBe('');
        expect(userAddress.zone).toBe('');
    });
});
