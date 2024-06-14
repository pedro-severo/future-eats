import { UserAddress } from '../../../../stores/redux/userAddress/interface';
import { UserAddressDTO } from './interfaces';

export const mapUserAddressDTOToUserAddress = (
    userAddressDto: UserAddressDTO
): UserAddress => {
    return {
        id: userAddressDto?.id || '',
        streetName: userAddressDto?.streetName || '',
        streetNumber: userAddressDto?.streetNumber || '',
        complement: userAddressDto?.complement || '',
        zone: userAddressDto?.zone || '',
        city: userAddressDto?.city || '',
        state: userAddressDto?.state || '',
    };
};
