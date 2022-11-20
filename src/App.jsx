import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import ForgotPassword from './components/Forgot-password';
import ResetPassword from './components/Reset-password';
import Profile from './components/Profile';
import Private from './components/Private';
import Navigation from './components/Navigation';
import Login from './components/Login';
import { AuthProvider } from './context/Auth.context';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/private" element={<Private />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
