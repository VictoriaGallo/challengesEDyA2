import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { auth, googleProvider } from '../firebase/config';
import { signInWithPopup, signOut } from 'firebase/auth';

// Crea el contexto
export const UserContext = createContext();

// Estado del usuario
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Será null si no está autenticado
    const navigate = useNavigate(); // Navigate para redirigir tras logout

    const login = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const userData = {
                id: result.user.uid,
                name: result.user.displayName,
            };
            setUser(userData); // Guarda los datos al iniciar sesión
            localStorage.setItem('lastPath', window.location.pathname); // Guarda la última página
            navigate(localStorage.getItem('lastPath') || '/', { replace: true });
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            setUser(null); // Elimina los datos de usuario al cerrar sesión
            navigate('/login', { replace: true }); // Redirige al login
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
