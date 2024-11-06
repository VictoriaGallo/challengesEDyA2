import { NavLink } from 'react-router-dom';
import './NavComponent.css';

export const NavComponent = () => {
  return (
    <nav className="nav-container">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>Home</NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>About</NavLink>
      <NavLink to="/login" className={({ isActive }) => (isActive ? 'active-link' : '')}>Login</NavLink>
    </nav>
  );
};
