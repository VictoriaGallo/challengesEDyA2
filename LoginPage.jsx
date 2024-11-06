import { useDispatch, useSelector } from 'react-redux';
import { loginWithEmail, loginWithGoogle } from '../store/slices/authSlice';
import { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import './pagesstyles.css';

export const LoginPage = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const authError = useSelector((state) => state.auth.error);
    const loading = useSelector((state) => state.auth.loading);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formError, setFormError] = useState('');

    const handleLoginWithEmail = (e) => {
        e.preventDefault();

        // Validación local: verificar que los campos no estén vacíos
        if (!email || !password) {
            setFormError('Por favor, rellena todos los campos.');
            return;
        }

        // Limpiar errores locales antes de enviar
        setFormError('');
        dispatch(loginWithEmail({ email, password }));
    };

    const handleLoginWithGoogle = () => {
        dispatch(loginWithGoogle());
    };

    useEffect(() => {
        if (isAuthenticated) {
            const lastPath = localStorage.getItem('lastPath') || '/';
            navigate(lastPath, { replace: true });
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className="page-container">
            <h1>Login</h1>
            <form onSubmit={handleLoginWithEmail}>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                {/* Mostrar error de validación local */}
                {formError && <p className="error-message">{formError}</p>}
                {/* Mostrar error de autenticación de Redux */}
                {authError && <p className="error-message">{authError}</p>}
                <button type="submit" disabled={loading}>
                    {loading ? 'Iniciando...' : 'Login with Email'}
                </button>
            </form>
            <hr />
            <button onClick={handleLoginWithGoogle} disabled={loading}>
                {loading ? 'Procesando...' : 'Login with Google'}
            </button>
            <p>
                ¿No tienes una cuenta? <NavLink to="/register">Regístrate aquí</NavLink>
            </p>
        </div>
    );
};
