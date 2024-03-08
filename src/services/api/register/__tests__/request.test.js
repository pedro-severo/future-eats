import { register } from '../request';
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

const registerInput = {
    name: 'string',
    email: 'string',
    password: 'string',
    cpf: 'string',
};

describe('register request', () => {
    it('should call register request correctly', async () => {
        api.post.mockResolvedValueOnce(mockData);
        await register(registerInput);
        expect(api.post).toBeCalled();
        expect(api.post).toBeCalledWith('/user/signup', registerInput);
    });
    it('should call register request with error', async () => {
        const registerInput = {
            username: 'invalid_user',
            password: 'invalid_password',
        };
        await expect(register(registerInput)).rejects.toThrow(
            'Failed to register.'
        );
    });
});
