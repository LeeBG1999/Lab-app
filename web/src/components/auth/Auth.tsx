import React, { useEffect, useState } from 'react';
import { Page } from 'shared/ui/page';
import { AuthFooter } from 'shared/ui/footer/auth-footer';
import { LoginController } from './components/login';
import { Route, Redirect, Switch } from 'react-router-dom';
import { SignUpController } from './components/sign-up/SignUpController';
import { useHistory } from 'react-router-dom';
import * as firebase from 'firebase/app';
import { useDispatch } from 'react-redux';
import { UiLoading } from 'shared/UiLoading';

export const Auth: React.FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    useEffect(() => {
        firebase.auth().onAuthStateChanged(async () => {
            setChecking(false);
        });
    }, [dispatch, history]);

    if (checking) {
        return <UiLoading />;
    }

    return (
        <Page bgColor="darkmagenta" footer={<AuthFooter />}>
            <Switch>
                <Route exact path="/auth/signin">
                    <LoginController />
                </Route>
                <Route exact path="/auth/signup">
                    <SignUpController />
                </Route>
                <Redirect from="/auth" to="/auth/signin" />
            </Switch>
        </Page>
    );
};
