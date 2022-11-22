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

import './utils/firebase.config';

import Notes from './components/Notes';
import AddNote from './components/AddNote';
import EditNote from './components/EditNote';
import { NotesProvider } from './context/Notes.context';

const AuthRequired = ({ children }) => {
  const location = useLocation();

  const { currentUser, loading } = useContext(AuthContext);

  if (loading) {
    if (currentUser) {
      return children;
    } else {
      return <Navigate to="/login" state={{ from: location.pathname }} />;
    }
  } else {
    return 'loading...';
  }
};

function App() {
  return (
    <NotesProvider>
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/register" element={<Register />} />

            <Route path="/notes" element={<Notes />} />
            <Route
              path="/notes/add"
              element={
                <AuthRequired>
                  <AddNote />
                </AuthRequired>
              }
            />
            <Route
              path="/notes/edit/:noteID"
              element={
                <AuthRequired>
                  <EditNote />
                </AuthRequired>
              }
            />

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
    </NotesProvider>
  );
}

export default App;
