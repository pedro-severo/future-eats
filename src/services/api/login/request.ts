import api from '../api';
import { LoginInput, LoginResponse } from './interface';

export const login = async (loginInput: LoginInput): Promise<LoginResponse> => {
    try {
        const response = await api.post('/user/login', loginInput);
        return response.data;
    } catch (err) {
        throw new Error('Failed to login.');
    }
};
