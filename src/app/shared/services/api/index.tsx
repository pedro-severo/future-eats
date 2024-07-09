// istanbul ignore file
import React, { useMemo } from 'react';
import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { COOKIES_LABEL, useCookies } from '../cookies';
import { useUserState } from '../../stores/redux/user';

export const graphqlUri = 'http://localhost:3003/graphql';

const httpLink = createHttpLink({
    uri: graphqlUri,
});

const APIProvider: React.FC<any> = ({ children }) => {
    const {
        userState: { token },
    } = useUserState();
    const { get } = useCookies();

    const authLink = useMemo(() => {
        return setContext((_, { headers }) => {
            const tokenFromCookies = get(COOKIES_LABEL.TOKEN);
            return {
                headers: {
                    ...headers,
                    authorization: token || tokenFromCookies || '',
                },
            };
        });
    }, [token, get]);

    const client = useMemo(() => {
        return new ApolloClient({
            link: authLink.concat(httpLink),
            cache: new InMemoryCache(),
        });
    }, [authLink]);

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default APIProvider;
