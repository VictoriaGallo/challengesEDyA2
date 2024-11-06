import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

// crea el contexto
export const UserContext = createContext();

// estado del usuario
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // sera null si no está autenticado
    const navigate = useNavigate(); // navigate para redirigir tras logout

    const login = (userData) => {
        setUser(userData); //  guarda sus datos al loguearse o log in como se escriba
    };

    const logout = () => {
        setUser(null); // si el usuario hace logout, elimina sus datos
        navigate('/login', { replace: true }); // vuelve al login
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
