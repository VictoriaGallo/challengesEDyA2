import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import AuthButtons from "./components/AuthButtons";

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const disableAuthButtons = useMemo(() => isAuthenticated, [isAuthenticated]);

  return (
    <div>
      <h1>Welcome to My App</h1>
      <AuthButtons disableAuthButtons={disableAuthButtons} />
    </div>
  );
};

export default App;
