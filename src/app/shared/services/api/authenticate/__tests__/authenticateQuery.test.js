import { AUTHENTICATE, authenticateQuery } from '../authenticateQuery';
import { graphqlUri } from '../..';
import { errorMessages } from '../../../../constants/errorMessages';

// eslint-disable-next-line no-global-assign
fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({}),
    })
);

describe('authenticateQuery', () => {
    beforeEach(() => {
        fetch.mockClear();
    });

    it('should returns data when authentication is successful', async () => {
        const mockData = {
            data: {
                authenticate: {
                    data: {
                        user: {
                            id: '123',
                        },
                    },
                },
            },
        };
        fetch.mockImplementationOnce(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockData),
            })
        );
        const result = await authenticateQuery('valid-token');
        expect(result).toEqual(mockData.data.authenticate.data);
        expect(fetch).toHaveBeenCalledWith(graphqlUri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: AUTHENTICATE,
                variables: {
                    token: 'valid-token',
                },
            }),
        });
    });
    it('throws an error when there are errors in the response', async () => {
        const mockError = {
            errors: [{ message: 'Invalid token' }],
        };

        fetch.mockImplementationOnce(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockError),
            })
        );

        await expect(authenticateQuery('invalid-token')).rejects.toThrow(
            'Invalid token'
        );
    });

    it('throws an error when data is missing in the response', async () => {
        const mockError = {
            data: null,
        };

        fetch.mockImplementationOnce(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockError),
            })
        );

        await expect(authenticateQuery('no-data-token')).rejects.toThrow(
            errorMessages.userNotAuthenticated
        );
    });
});
