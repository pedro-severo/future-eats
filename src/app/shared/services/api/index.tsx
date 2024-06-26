import React from 'react';
import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { COOKIES_LABEL, cookies } from '../cookies';

const httpLink = createHttpLink({
    uri: 'http://localhost:3003/graphql',
});

// istanbul ignore next
const authLink = setContext((_, { headers }) => {
    const token = cookies().get(COOKIES_LABEL.TOKEN);
    return {
        headers: {
            ...headers,
            authorization: token || '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

const APIProvider: React.FC<any> = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default APIProvider;
