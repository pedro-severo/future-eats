import { gql } from '@apollo/client';

export const SIGNUP = gql`
    mutation Signup(
        $email: String!
        $password: String!
        $name: String!
        $cpf: String!
    ) {
        signup(
            input: {
                email: $email
                password: $password
                name: $name
                cpf: $cpf
            }
        ) {
            data {
                token
                user {
                    id
                }
            }
        }
    }
`;
