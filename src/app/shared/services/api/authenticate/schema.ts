import { gql } from '@apollo/client';
import { graphqlUri } from '..';

export const AUTHENTICATE = gql`
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
            query: `
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
        `,
            variables: {
                token,
            },
        }),
    })
        .then((res) => res.json())
        .then((result) => result.data?.authenticate?.data);
