//1.
import React, { useEffect, useState } from "react";
import {auth} from "./firebase";
import { getUser } from "./utils/getUser";

//2.
export const AuthContext = React.createContext()

//3.
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userBody , setUserBody] = useState(null)

  const handleUser = async(uid ) => {
    await getUser(uid).then((res) => {
      console.log("Res : ",res[0]);
      setUserBody({
       
        designation: res[0].designation,
        displayName: res[0].name,
        photoURL: res[0].displayPicture
      })
      
    })
    .catch((err) => console.log("Error : ",err))
  }
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setUser(user)
      handleUser(user?.uid)
    })
  }, []);

  return (
    <AuthContext.Provider value={{user , userBody ,setUserBody} }>
      {children}
        </AuthContext.Provider>
  );s
};

export default AuthProvider