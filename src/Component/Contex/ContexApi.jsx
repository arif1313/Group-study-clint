import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { getAuth } from "firebase/auth";
import app from "../../Firebase/Firebase.confiq";
export const AutContext = createContext(null)
const ContexApi = ({children}) => {
    const auth = getAuth(app)
    const [user, setUser]=useState(null);
    const [loading, setlodding]=useState(true);
    const provider = new GoogleAuthProvider();
   
  
 const createuser=(email,password)=>{
    setlodding(true)
    return createUserWithEmailAndPassword(auth, email, password)
} 
const SinIn=(email,password)=>{
    setlodding(true)
    return signInWithEmailAndPassword(auth, email, password)
} 
const gogleSignIn = ()=>{
    setlodding(true)
return signInWithPopup(auth,provider)

}

const LogOut = ()=>{
    setlodding(true)
    return signOut(auth)
}

const resetPass =(email)=>{
    return sendPasswordResetEmail(auth,email)
}
const profileUpdate =(currntUser, name,url)=>{
   return updateProfile(currntUser, { displayName: name,photoURL
:url  })
} 

useEffect(()=>{
    const unSubscribe =  onAuthStateChanged(auth, courentUser=>{
         setUser(courentUser);
         setlodding(false)
     })
     return()=>{
         unSubscribe();
     } 
 },[])
const info = {
  
    user,
    loading,
    createuser,
     SinIn,
      LogOut,
      gogleSignIn,
      resetPass,
      profileUpdate
    }

    return (
        <AutContext.Provider value={info}>
            {children}
        </AutContext.Provider>
    );
};
ContexApi.propTypes = {
    children:PropTypes.node

}
export default ContexApi;