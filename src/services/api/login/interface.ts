import { User } from '../../../global/user/interface';

export interface LoginInput {
    email: string;
    password: string;
}

export interface LoginResponse {
    user: User;
    token: string;
}
