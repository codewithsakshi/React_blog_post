import React, {ReactNode, useEffect, useState, useContext, createContext} from 'react'
import { auth } from '../firebase'
import {
  Auth,
  UserCredential,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  function signUp(email, password){
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function signIn(email, password){
    return signInWithEmailAndPassword(auth, email, password)
  }
  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email)
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubsrcibe = auth.onAuthStateChanged((user) => {
      setUser(user)
    })
    return unsubsrcibe
  }, [])

  const values = {
    signUp,
    user,
    signIn,
    resetPassword,
    auth,
  }
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

