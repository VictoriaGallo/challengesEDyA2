import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginWithEmail,
  loginWithGoogle,
  logoutUser,
  registerWithTestUser,
} from "../actions/authActions";

const AuthButtons = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleEmailLogin = () => {
    const email = "testuser@example.com";
    const password = "testpassword123";
    dispatch(loginWithEmail(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogle());
  };

  const handleRegister = () => {
    dispatch(registerWithTestUser());
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      {!isAuthenticated && (
        <>
          <button onClick={handleRegister} disabled={isAuthenticated}>
            Register Test User
          </button>
          <button onClick={handleEmailLogin} disabled={isAuthenticated}>
            Login with Email
          </button>
          <button onClick={handleGoogleLogin} disabled={isAuthenticated}>
            Login with Google
          </button>
        </>
      )}
      {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default AuthButtons;
