import React from 'react';
import { render } from '@testing-library/react';
import APIProvider from '../index';

jest.mock('@apollo/client', () => ({
    ApolloClient: jest.fn(() => ({
        query: jest.fn(),
        mutate: jest.fn(),
        subscribe: jest.fn(),
        readQuery: jest.fn(),
        writeQuery: jest.fn(),
        readFragment: jest.fn(),
        writeFragment: jest.fn(),
        clearStore: jest.fn(),
        resetStore: jest.fn(),
        onResetStore: jest.fn(),
        cache: jest.fn(),
    })),
    InMemoryCache: jest.fn(),
    // eslint-disable-next-line react/prop-types
    ApolloProvider: ({ children }) => <>{children}</>,
    createHttpLink: jest.fn(),
}));

jest.mock('@apollo/client/link/context', () => ({
    setContext: jest.fn().mockImplementation(() => ({
        concat: jest.fn(),
    })),
}));

describe('APIProvider component', () => {
    test('renders children', () => {
        const ChildComponent = () => <div>Child Component</div>;
        const { getByText } = render(
            <APIProvider>
                <ChildComponent />
            </APIProvider>
        );
        expect(getByText('Child Component')).toBeInTheDocument();
    });
});
