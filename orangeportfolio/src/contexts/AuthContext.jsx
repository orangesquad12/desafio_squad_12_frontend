import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null); 

  const setAuthToken = (newToken) => {
    setToken(newToken);
  };

  const setUserDetails = (userData) => {
    setUser(userData);
  };

  return (
    <AuthContext.Provider value={{ token, setAuthToken, user, setUserDetails }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);

