import { createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/credentials';
import { login, logout } from '../slice/authSlice';

const getSerializableUserData = (user) => ({
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
});

export const registerWithTestUser = () => async (dispatch) => {
    const testEmail = 'testuser@example.com';
    const testPassword = 'testpassword123';

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, testEmail, testPassword);
        const userData = getSerializableUserData(userCredential.user);
        dispatch(login(userData));
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            console.log('Email already in use.');
        } else {
            console.error('Error in test user registration or login:', error);
        }
    };
};

export const loginWithEmail = (email, password) => async (dispatch) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const userData = getSerializableUserData(userCredential.user);
        dispatch(login(userData));
    } catch (error) {
        console.error('Error in email login:', error);
    }
};

export const loginWithGoogle = () => async (dispatch) => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const userData = getSerializableUserData(result.user);
        dispatch(login(userData));
    } catch (error) {
        console.error('Error in Google login:', error);
    }
};

export const logoutUser = () => async (dispatch) => {
    try {
        await signOut(auth);
        dispatch(logout());
    } catch (error) {
        console.error('Error in logout:', error);
    }
};
