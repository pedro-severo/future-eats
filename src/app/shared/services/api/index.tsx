// istanbul ignore file
import React, { useMemo } from 'react';
import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { COOKIES_LABEL, cookies } from '../cookies';
import { useUserState } from '../../stores/redux/user';

const httpLink = createHttpLink({
    uri: 'http://localhost:3003/graphql',
});

const APIProvider: React.FC<any> = ({ children }) => {
    const {
        userState: { token },
    } = useUserState();
    const authLink = useMemo(() => {
        return setContext((_, { headers }) => {
            const tokenFromCookies = cookies().get(COOKIES_LABEL.TOKEN);
            return {
                headers: {
                    ...headers,
                    authorization: token || tokenFromCookies || '',
                },
            };
        });
    }, [token]);
    const client = useMemo(() => {
        return new ApolloClient({
            link: authLink.concat(httpLink),
            cache: new InMemoryCache(),
        });
    }, [authLink]);
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default APIProvider;
