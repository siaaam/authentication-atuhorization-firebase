import { createContext, useEffect, useState } from 'react';
import { auth } from '../utils/firebase.config';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      // if (!user) {
      //   setLoading(true);
      // } else {
      //   setCurrentUser(user);
      //   setLoading(true);
      // }
      setCurrentUser(user);
      setLoading(true);
    });
  }, []);

  const value = {
    currentUser,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
