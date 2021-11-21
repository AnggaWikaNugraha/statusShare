import React from 'react';
import {
    ApolloProvider,
    createHttpLink,
    ApolloClient,
    InMemoryCache
} from '@apollo/client'
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: 'http://localhost:5000/'
});

const authLink = setContext(() => {
    const token = localStorage.getItem('jwtToken');
    return {
        headers: {
            Authorization: token ? `Bearer ${token}` : ''
        }
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

const ApolloProviderApp = ({ children }) => (
    <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
);

export default ApolloProviderApp
