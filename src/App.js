import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';

function NeedLogin() {
  // const { currentUser } = useSelector((state) => state.login);
  const currentUser = false;
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}

function AlreadyLoggedIn() {
  // const { currentUser } = useSelector((state) => state.login);
  const currentUser = false;
  if (!currentUser) {
    return <Outlet />;
  } else {
    !toast.isActive('alreadyLoggedIn') && toast.error('You are already logged in', { toastId: 'alreadyLoggedIn' });
    return <Navigate to="/" />;
  }
}

function App() {
  return (
    <div className="App">
      <ToastContainer position="top-center" theme="colored" />
      <Router>
        <Routes>
          <Route exact path="/" element={<NeedLogin />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route exact path="/" element={<AlreadyLoggedIn />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
