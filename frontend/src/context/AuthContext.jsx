import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { api } from "../lib/api";

//* Create context api
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [isToken, setIsToken] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuthHandler = async () => {
    try {
      const response = await axios.get(`${api}/api/auth/check-auth`, {
        withCredentials: true,
      });
      setAuthUser(response.data.data);
      setIsToken(true);
    } catch (error) {
      setAuthUser(null);
      setIsToken(false);
      console.log(error.response.data.success);
    } finally {
      setIsLoading(false);
    }
  };

  const handlerLogout = async () => {
    try {
      const response = await axios.post(`${api}/api/auth/logout`,null, {
        withCredentials: true,
      });
      console.log(response);
      setAuthUser(null);
      setIsToken(false);
    } catch (error) {
      console.log(error);
      setIsToken(true);
    }
  };
  useEffect(() => {
    checkAuthHandler();
  }, []);

  return (
    <AuthContext.Provider
      value={{ authUser,isToken, isLoading, checkAuthHandler, handlerLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
