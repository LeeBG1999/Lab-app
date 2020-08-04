import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { SubPage } from 'shared/ui/sub-page';
import { AUTH_LOGIN_PATH } from 'routes';
import * as firebase from 'firebase/app';
import { useDispatch } from 'react-redux';
import { updateCurrentUser } from 'state/actions';

interface Props {
    roles?: string[];
}

export const PrivateRoute: React.FC<Props> = ({ children, roles }) => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        let isMounted = true;
        firebase.auth().onAuthStateChanged(async user => {
            if (user) {
                try {
                    let matchRole = false;
                    const userToken = await user.getIdToken();
                    const claims = (await user.getIdTokenResult()).claims;
                    if (isMounted) {
                        setLoading(false);
                        dispatch(
                            updateCurrentUser({
                                roles: claims,
                                id: user.uid,
                                token: userToken,
                                displayName:
                                    user.displayName || user.email || '',
                                photo: user.photoURL,
                            }),
                        );
                    }

                    if (roles && roles.length) {
                        roles.map(role => {
                            if (claims[role]) matchRole = true;
                            return null;
                        });
                        if (!matchRole) history.push('/');
                    }
                } catch (error) {
                    console.log('error :>> ', error);
                }
            } else {
                history.push({
                    pathname: AUTH_LOGIN_PATH,
                    state: {
                        prevPath: history.location.pathname,
                    },
                });
            }
        });

        return (): void => {
            isMounted = false;
        };
    }, [dispatch, history, roles]);

    return <SubPage loading={loading}>{children}</SubPage>;
};
