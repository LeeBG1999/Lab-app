import './index.css';
import * as serviceWorker from './serviceWorker';
import React, { useContext, useReducer } from 'react';
import { ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { client } from './apollo';
import { theme } from 'theme';
import { App } from 'App';
import { Provider } from 'react-redux';
import { store } from 'state';
import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyAOU2K84Zgq22qALBWG7k46_6CBeKHEZ3k',
    authDomain: 'mandevices-4c9d6.firebaseapp.com',
    databaseURL: 'https://mandevices-4c9d6.firebaseio.com',
    projectId: 'mandevices-4c9d6',
    storageBucket: 'mandevices-4c9d6.appspot.com',
    messagingSenderId: '428731434528',
    appId: '1:428731434528:web:0aa57f19f827d834065e45',
};

firebase.initializeApp(firebaseConfig);

declare global {
    interface Window {
        fbAsyncInit: Function;
    }
}

const initialState = {
    isLogin: false,
};
const Context = React.createContext({});

const reducer = (state: typeof initialState, action: any) => {
    switch (action) {
        default:
            return state;
    }
};

export const StateProvider: React.FC<{
    reducer: typeof reducer;
    initialState: typeof initialState;
}> = ({ reducer, initialState, children }) => (
    <Context.Provider value={useReducer(reducer, initialState)}>
        {children}
    </Context.Provider>
);
export const useStateValue = () => useContext(Context);

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <ApolloProvider client={client}>
                <StateProvider reducer={reducer} initialState={initialState}>
                    <App />
                </StateProvider>
            </ApolloProvider>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
