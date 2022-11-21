import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  getDoc,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from 'firebase/firestore';

// getDoc,
//   Doc,
//   query,

const firebaseConfig = {
  apiKey: 'AIzaSyDjWDt3HmPikJXnutbmbx7rs4eWxTG7yDc',
  authDomain: 'authentication-authoriza-755e9.firebaseapp.com',
  projectId: 'authentication-authoriza-755e9',
  storageBucket: 'authentication-authoriza-755e9.appspot.com',
  messagingSenderId: '245395581404',
  appId: '1:245395581404:web:4021112303d2ee579a0719',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const db = getFirestore(app);

export const notesColRef = collection(db, 'notes');

// getDocs(colRef)
//   .then((snapshot) => {
//     const notes = [];

//     snapshot.docs.forEach((doc) => {
//       notes.push({
//         ...doc.data(),
//         id: doc.id,
//       });
//     });

//     console.log(notes);
//   })
//   .catch((err) => console.log(err));

// // query

// const queryData = query(colRef, where('title', '==', 'title from vscode'));

// real time data

// onSnapshot(colRef, (snapshot) => {
//   const notes = [];

//   snapshot.docs.forEach((doc) => {
//     notes.push({
//       ...doc.data(),
//       id: doc.id,
//     });
//   });

//   console.log(notes);
// });

// getting a single document

// const docRef = doc(colRef, 'bR1NYduOULgkyS3NQpcZ');

// getDoc(docRef).then((doc) => console.log(doc.data()));

// getting a single document real time

// const docRef = doc(colRef, 'bR1NYduOULgkyS3NQpcZ');

// onSnapshot(docRef).then((doc) => console.log(doc.data()));

// add doc

// addDoc(colRef, {
//   title: 'from vs code',
//   description: 'description from vs code',
//   user: {
//     name: 'asdhasgdhuasdf',
//     id: 121283812,
//   },
// });

// update a doc
// updateDoc(docRef, {
//   title: 'updated title',
//   'user.name': 'ronaldo',
// });

// delete a doc
// deleteDoc(docRef).then(() => {
//   console.log('data deleted successfully');
// });
