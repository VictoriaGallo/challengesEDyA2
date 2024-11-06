import { Routes, Route } from 'react-router-dom';
import { LoginPage, HomePage, AboutPage, RegisterPage } from '../pages';
import { PrivateRoutes } from './PrivateRoutes';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route 
                path="/" 
                element={
                    <PrivateRoutes>
                        <HomePage />
                    </PrivateRoutes>
                } 
            />
            <Route 
                path="/about" 
                element={
                    <PrivateRoutes>
                        <AboutPage />
                    </PrivateRoutes>
                } 
            />
          
        </Routes>
    );
};
