import { createSlice } from '@reduxjs/toolkit';
import { 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut, 
    createUserWithEmailAndPassword, 
    updateProfile 
} from 'firebase/auth';
import { auth, googleProvider } from '../../firebase/config';

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.loading = false;
            state.error = null;
        },
        logoutSuccess: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.loading = false;
            state.error = null;
        },
        authFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { loginStart, loginSuccess, logoutSuccess, authFailure } = authSlice.actions;

// Thunk para login con email y contraseña
export const loginWithEmail = ({ email, password }) => async (dispatch) => {
    dispatch(loginStart());
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        const userData = {
            uid: result.user.uid,
            name: result.user.displayName,
            email: result.user.email,
        };
        dispatch(loginSuccess(userData));
    } catch (error) {
        console.error('Error al iniciar sesión con email:', error);
        dispatch(authFailure(error.message));
    }
};

// Thunk para login con Google
export const loginWithGoogle = () => async (dispatch) => {
    dispatch(loginStart());
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const userData = {
            uid: result.user.uid,
            name: result.user.displayName,
            email: result.user.email,
        };
        dispatch(loginSuccess(userData));
    } catch (error) {
        console.error('Error al iniciar sesión con Google:', error);
        dispatch(authFailure(error.message));
    }
};

// Thunk para logout
export const logout = () => async (dispatch) => {
    dispatch(loginStart());
    try {
        await signOut(auth);
        dispatch(logoutSuccess());
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
        dispatch(authFailure(error.message));
    }
};

// Thunk para registro con email y contraseña
export const registerWithEmail = ({ name, email, password }) => async (dispatch) => {
    dispatch(loginStart());
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        // Actualizar el perfil del usuario con el nombre
        await updateProfile(result.user, { displayName: name });
        
        const userData = {
            uid: result.user.uid,
            name: result.user.displayName,
            email: result.user.email,
        };
        dispatch(loginSuccess(userData));
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        dispatch(authFailure(error.message));
    }
};

export default authSlice.reducer;
