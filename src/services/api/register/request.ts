import api from '../api';
import { RegisterInput, RegisterResponse } from './interface';

export const register = async (
    registerInput: RegisterInput
): Promise<RegisterResponse> => {
    try {
        const response = await api.post('/user/signup', registerInput);
        return response.data;
    } catch (err) {
        throw new Error('Failed to register.');
    }
};
