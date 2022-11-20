import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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
