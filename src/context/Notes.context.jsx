import { createContext, useEffect, useState } from 'react';
import { onSnapshot, getDocs, doc, getDoc } from 'firebase/firestore';

import { notesColRef } from '../utils/firebase.config';

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(notesColRef, (snapshots) => {
      const notes = snapshots.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setNotes(notes);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value = { notes };
  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};
