import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    () => localStorage.getItem("token") || null
  );
  const [user, setUser] = useState(() => {
    const userJson = localStorage.getItem("user");
    return userJson ? JSON.parse(userJson) : null;
  });

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    // Atualiza o localStorage sempre que o usuário muda
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

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
