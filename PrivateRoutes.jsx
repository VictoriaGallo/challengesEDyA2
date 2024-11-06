// src/components/PrivateRoutes.jsx
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoutes = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const location = useLocation();

    if (!isAuthenticated) {
        localStorage.setItem('lastPath', location.pathname + location.search);
        return <Navigate to="/login" />;
    }

    return children;
};
