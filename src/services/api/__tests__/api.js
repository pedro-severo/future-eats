import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import api from '../api';

const mock = new MockAdapter(axios);

mock.onGet('url').reply(200, { data: 'mocked response' });

describe('API abstraction', () => {
    it('should make a GET request to the baseURL', async () => {
        api.get('/').then((res) => {
            expect(res.status).toBe(200);
            expect(res.data).toEqual({ data: 'mocked response' });
        });
    });

    it('should give a error in a GET request', async () => {
        api.get('/')
            .then(() => {
                throw new Error('Wrong inputs passed in');
            })
            .catch((e) => {
                expect(e.name).toBe('AxiosError');
            });
    });
});
