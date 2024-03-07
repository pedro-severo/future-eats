import { login } from '../request';
import api from '../../api';

jest.mock('axios', () => {
    return {
        create: jest.fn(() => ({
            get: jest.fn(),
            post: jest.fn(),
            interceptors: {
                request: { use: jest.fn(), eject: jest.fn() },
            },
        })),
    };
});

const mockData = {
    user: 'user',
    token: 'token',
};

const loginInput = {
    email: 'email',
    password: 'password',
};

describe('Login request', () => {
    it('should call login request correctly', async () => {
        api.post.mockResolvedValueOnce(mockData);
        await login(loginInput);
        expect(api.post).toBeCalled();
        expect(api.post).toBeCalledWith('/user/login', loginInput);
    });
    it('should call login request correctly', async () => {
        const loginInput = {
            username: 'invalid_user',
            password: 'invalid_password',
        };
        await expect(login(loginInput)).rejects.toThrow('Failed to login.');
    });
});
