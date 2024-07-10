import { graphqlUri } from '..';
import { errorMessages } from '../../../constants/errorMessages';

export const AUTHENTICATE = `
    query authenticate($token: String!) {
        authenticate(input: { token: $token }) {
            status
            data {
                user {
                    id
                }
            }
        }
    }
`;

export const authenticateQuery = async (token: string) =>
    fetch(graphqlUri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: AUTHENTICATE,
            variables: {
                token,
            },
        }),
    })
        .then((res) => res.json())
        .then((result) => {
            if (result.errors?.length)
                throw new Error(result.errors[0]?.message);
            if (!result.data)
                throw new Error(errorMessages.userNotAuthenticated);
            return result.data?.authenticate?.data;
        });
