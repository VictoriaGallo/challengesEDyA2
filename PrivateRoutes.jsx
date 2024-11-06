import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export const PrivateRoutes = ({ children }) => {
    const { user } = useContext(UserContext);
    const location = useLocation();

    // si NOO hay usuario autenticado, guardar la última ruta e ir a login
    if (!user) {
        localStorage.setItem('lastPath', location.pathname + location.search);
        return <Navigate to="/login" />;
    }

    // peero si está autenticado, mostrar la ruta
    return children;
};
