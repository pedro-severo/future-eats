import { gql } from '@apollo/client';

export const REGISTER_ADDRESS = gql`
    mutation registerAddress(
        $userId: String!
        $city: String!
        $complement: String
        $state: String!
        $streetName: String!
        $streetNumber: String!
        $zone: String!
    ) {
        registerAddress(
            input: {
                userId: $userId
                city: $city
                complement: $complement
                state: $state
                streetName: $streetName
                streetNumber: $streetNumber
                zone: $zone
            }
        ) {
            status
            data {
                id
            }
        }
    }
`;
