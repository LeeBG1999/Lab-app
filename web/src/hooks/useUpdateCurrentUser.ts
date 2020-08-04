import { updateCurrentUser } from './../state/actions';
import * as firebase from 'firebase/app';
import { Dispatch } from 'react';
export const updateCurrentUserStore = async (
    dispatch: Dispatch<any>,
    user: firebase.User,
): Promise<void> => {
    const userToken = await user.getIdToken();
    const claims = (await user.getIdTokenResult()).claims;
    dispatch(
        updateCurrentUser({
            roles: claims,
            id: user.uid,
            token: userToken,
            displayName: user.displayName || user.email || '',
            photo: user.photoURL,
        }),
    );
};
