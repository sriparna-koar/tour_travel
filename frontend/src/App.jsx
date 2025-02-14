
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/Signup';
import Home from './components/Home';
import Login from './components/Login';
import BookingForm from './components/BookingForm';
import Hotel from './components/Hotel';
import Weather from './components/Weather';
import AddTrip from './components/AddTrip';
import AllTrips from './components/AllTrips';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addtrip" element={<AddTrip />} />
          <Route path="/alltrip" element={<AllTrips />} />
          <Route path="/hotels" element={<Hotel />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
