import './App.css';

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from 'react-router-dom';
import Register from './components/Register';
import ForgotPassword from './components/Forgot-password';
import ResetPassword from './components/Reset-password';
import Profile from './components/Profile';
import Private from './components/Private';
import Navigation from './components/Navigation';
import Login from './components/Login';
import { AuthContext, AuthProvider } from './context/Auth.context';
import { useContext } from 'react';

const AuthRequired = ({ children }) => {
  const location = useLocation();

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }
};

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
          <Route
            path="/profile"
            element={
              <AuthRequired>
                <Profile />
              </AuthRequired>
            }
          />
          <Route
            path="/private"
            element={
              <AuthRequired>
                <Private />
              </AuthRequired>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
