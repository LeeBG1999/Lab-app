import {
    ApolloClient,
    HttpLink,
    InMemoryCache,
    from,
    ApolloLink,
} from '@apollo/client';

import { onError } from '@apollo/link-error';
import { store } from 'state';
import { updateServerConnectionState } from 'state/actions';

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
        );
    if (networkError) {
        if (networkError.message === 'Failed to fetch') {
            store.dispatch(updateServerConnectionState(false));
        }
    }
});

const authMiddleware = new ApolloLink((operation, forward) => {
    const currentUser = store.getState().currentUser;
    operation.setContext(({ headers = {} }) => ({
        headers: {
            ...headers,
            authorization: currentUser ? `Bearer ${currentUser.token}` : '',
        },
    }));

    return forward(operation);
});

export const client = new ApolloClient({
    link: from([
        errorLink,
        authMiddleware,
        new HttpLink({
            uri: process.env.REACT_APP_SERVER_URL,
        }),
    ]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
});
