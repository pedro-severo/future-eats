import { User } from '../../../global/redux/user/interface';

export interface LoginInput {
    email: string;
    password: string;
}

export interface LoginResponse {
    user: User;
    token: string;
}
