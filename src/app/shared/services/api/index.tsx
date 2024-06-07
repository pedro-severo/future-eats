import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:3003/graphql',
    cache: new InMemoryCache(),
});

const APIProvider: React.FC<any> = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default APIProvider;
