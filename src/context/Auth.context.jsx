import { createContext, useEffect, useState } from 'react';
import { auth } from '../utils/firebase.config';
import { onAuthStateChanged } from 'firebase/auth';
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      console.log(user);
      setCurrentUser(user);
    });
  }, []);

  const value = {
    currentUser: auth.currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
