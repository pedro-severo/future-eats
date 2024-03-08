import { User } from '../../../global/user/interface';

export interface RegisterInput {
    name: string;
    email: string;
    password: string;
    cpf: string;
}

export interface RegisterResponse {
    user: User;
    token: string;
}
