import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext'; 
import { AppRoutes } from './components/AppRoutes'; 
import { NavComponent } from './components/shared/NavComponent'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <NavComponent />
        <AppRoutes />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
