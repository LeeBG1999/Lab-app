import { LoginView } from '../views/LoginView';
import React, { useEffect } from 'react';
import * as firebase from 'firebase/app';
import { useCreateAccountMutation } from 'generated/apollo-react-hook.generated';
import { useDispatch } from 'react-redux';
import { notification } from 'antd';
import { useHistory } from 'react-router-dom';
import { updateCurrentUserStore } from 'hooks/useUpdateCurrentUser';

export const LoginController: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [createAccount, { loading, data }] = useCreateAccountMutation();

    useEffect(() => {
        if (data) {
            if (data.createAccount.__typename === 'FirebaseAccount') {
                history.push('/');
            }
            if (data.createAccount.__typename === 'Fail') {
                notification.error({ message: data.createAccount.message });
            }
        }
    }, [data, history]);
    useEffect(() => {
        firebase.auth().onAuthStateChanged(async user => {
            if (user) {
                try {
                    await updateCurrentUserStore(dispatch, user);
                    await createAccount();
                } catch (error) {
                    console.log('error :>> ', error);
                }
            } else {
                // setChecking(false);
            }
        });
    }, [dispatch, history, createAccount]);

    const handleGoogleLogin = async (): Promise<void> => {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            await firebase.auth().signInWithPopup(provider);
        } catch (error) {
            // Handle Errors here.
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // The email of the user's account used.
            // const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            // const credential = error.credential;
            // ...
        }
    };

    return (
        <>
            <LoginView loading={loading} onGoogleLogin={handleGoogleLogin} />
        </>
    );
};
