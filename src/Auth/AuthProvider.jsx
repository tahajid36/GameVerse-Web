import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "./firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
 
//   console.log(user)

  const CreateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const SignIn =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  const SignOut = () => {
    return signOut(auth)
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
    })
    return ()=>{
        unsubscribe()
    }
  },[])

  const authData = {
    user,
    setUser,
    CreateUser,
    SignIn,
    SignOut
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
