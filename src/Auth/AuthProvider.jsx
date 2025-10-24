import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "./firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading , setLoading] = useState(true)
  const [resetEmail, setEmail] = useState(null)

  
 
//   console.log(user)

  const CreateUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    return signInWithPopup(auth, provider)
  }
  const SignIn =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
    
  }
  const SignOut = () => {
    return signOut(auth)
  }

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth , email)
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setLoading(false)
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
    SignOut,
    googleSignIn,
    loading,
    setLoading,
    resetPassword,
    resetEmail,
    setEmail
    


  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
