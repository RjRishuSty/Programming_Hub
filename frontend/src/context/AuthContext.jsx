import React, {  createContext, useEffect, useState } from "react";
import axios from "axios";
import { api } from "../lib/api";

//* Create context api
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuthHandler = async () => {
    try {
      const response = await axios.get(`${api}/api/auth/check-auth`, {
        withCredentials: true,
      });
      console.log("in Auth Context", response);
    } catch (error) {
      setAuthUser(null);
      console.log(error.response.data.success);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    checkAuthHandler();
  }, []);
  return (
    <AuthContext.Provider value={{ authUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
