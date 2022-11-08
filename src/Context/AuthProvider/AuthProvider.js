import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../Firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = (provider) =>{
    setLoading(true);
    return signInWithPopup(auth, provider);
  }

  const signInWithfacebook = (provider) =>{
    setLoading(true);
    return signInWithPopup(auth, provider);
  }

  const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const logInUser = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () =>{
    return signOut(auth);
  }


  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
      setUser(currentUser);
      setLoading(false);
    })

    return () => unsubscribe();

  }, [])

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    signInWithGoogle,
    signInWithfacebook,
    createUser,
    logInUser,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;