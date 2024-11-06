import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext'; 
import { AppRoutes } from './components/AppRoutes'; 
import { NavComponent } from './components/shared/NavComponent'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <NavComponent />
        <AppRoutes />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
