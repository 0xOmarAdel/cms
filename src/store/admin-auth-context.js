import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (adminName) => {}
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('adminName');

    if (storedUserLoggedInInformation) {
      setIsLoggedIn(true);
    } else {
      navigate('/admin/login');
    }
  }, [navigate]);

  const logoutHandler = () => {
    localStorage.removeItem('adminName');
    setIsLoggedIn(false);
  };

  const loginHandler = (adminName) => {
    localStorage.setItem('adminName', adminName);
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;