import { User } from '../../../../stores/redux/user/interface';
import { UserDTO } from './interfaces';

export const mapUserDTOToUser = (userDto: UserDTO): User => {
    return {
        id: userDto?.id || '',
        name: userDto?.name || '',
        email: userDto?.email || '',
        hasAddress: userDto?.hasAddress || false,
        cpf: userDto?.cpf || '',
    };
};
