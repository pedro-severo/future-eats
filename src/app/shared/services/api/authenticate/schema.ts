import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
    query authenticate($token: String!) {
        authenticate(input: { token: $token }) {
            status
            data {
                isAuthenticated
                role
            }
        }
    }
`;
