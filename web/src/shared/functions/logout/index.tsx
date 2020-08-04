import * as firebase from 'firebase/app';
export const useLogout: () => Promise<void> = async () => {
    try {
        await firebase.auth().signOut();
    } catch (error) {}
};
