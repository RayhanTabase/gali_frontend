import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';

// function ProtectedRoute() {
//   const user = JSON.parse(localStorage.getItem('user'));
//   return user ? <Outlet /> : <Navigate to="/login" />;
// }

function App() {
  return (
    <div className="App">
      <ToastContainer position="top-center" theme="colored" />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
