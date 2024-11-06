import { useDispatch, useSelector } from 'react-redux';
import { registerWithEmail } from '../store/slices/authSlice';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './pagesstyles.css';

export const RegisterPage = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const authError = useSelector((state) => state.auth.error);
    const loading = useSelector((state) => state.auth.loading);
    const navigate = useNavigate();
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [formError, setFormError] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        // Validar que las contraseñas coincidan
        if (password !== confirmPassword) {
            setFormError('Las contraseñas no coinciden.');
            return;
        }
        setFormError('');
        dispatch(registerWithEmail({ name, email, password }));
    };

    useEffect(() => {
        if (isAuthenticated) {
            const lastPath = localStorage.getItem('lastPath') || '/';
            navigate(lastPath, { replace: true });
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className="page-container">
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Nombre:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
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
                <div>
                    <label>Confirmar Contraseña:</label>
                    <input 
                        type="password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required 
                    />
                </div>
                {formError && <p className="error-message">{formError}</p>}
                {authError && <p className="error-message">{authError}</p>}
                <button type="submit" disabled={loading}>
                    {loading ? 'Registrando...' : 'Registrar'}
                </button>
            </form>
        </div>
    );
};

