import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux'; 
import { store } from './store/store'; 
import { AppRoutes } from './components/AppRoutes'; 
import { NavComponent } from './components/shared/NavComponent'; 
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';
import { loginSuccess, logoutSuccess } from './store/slices/authSlice';


const AuthListener = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const userData = {
                    uid: user.uid,
                    name: user.displayName,
                    email: user.email,
                };
                dispatch(loginSuccess(userData));
            } else {
                dispatch(logoutSuccess());
            }
        });

        return () => unsubscribe();
    }, [dispatch]);

    return children;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
      <BrowserRouter>
        <AuthListener>
          <NavComponent />
          <AppRoutes />
        </AuthListener>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
