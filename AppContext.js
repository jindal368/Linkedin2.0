//1.
import React, { useEffect, useState } from "react";
import {auth} from "./firebase";

//2.
export const AuthContext = React.createContext()

//3.
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      
      setUser(user)
    })
  }, []);

  return (
    <AuthContext.Provider value={{user} }>
      {children}
        </AuthContext.Provider>
  );s
};

export default AuthProvider