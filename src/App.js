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

// function ProtectedRoute() {
//   const user = JSON.parse(localStorage.getItem('user'));
//   return user ? <Outlet /> : <Navigate to="/login" />;
// }

function App() {
  return (
    <div className="App">
      {/* <Router>
        <ToastContainer position="top-center" theme="colored" />
        <Routes>
          <Route exact path="/" element={< />}>
            <Route path="/" element={< />} />
            <Route path="/add-reservation" element={< />} />
            <Route path="/doctors/:doctorId" element={< />} />
            <Route path="/reserve/:doctorId" element={< />} />
            <Route path="/add/doctor" element={<AddDoctor />} />
            <Route path="reservation/edit/:reservationId" element={< />} />
            <Route path="doctors/delete" element={< />} />
            <Route
              path="/reservations/:doctorId/:reservationId"
              element={< />}
            />
            <Route
              path="/my-reservations"
              element={< />}
            />
          </Route>
          <Route path="/login" element={< />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
