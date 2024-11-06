import { NavLink } from 'react-router-dom';
import { useContext } from 'react'; // Importa useContext para acceder al contexto.
import { UserContext } from '../../context/UserContext'; // Importa el contexto de usuario.
import './NavComponent.css';

export const NavComponent = () => {
    const { user, logout } = useContext(UserContext); // Obtiene el estado del usuario y la función de logout.

    return (
        <nav className="nav-container">
            {/* Enlaces de navegación */}
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>About</NavLink>

            {user ? (
                <>
                    <span>Bienvenido, {user.name}</span> {/* Muestra el nombre del usuario */}
                    <button onClick={logout}>Logout</button> {/* Botón de logout */}
                </>
            ) : (
                <NavLink to="/login" className={({ isActive }) => (isActive ? 'active-link' : '')}>Login</NavLink>
            )}
        </nav>
    );
};
