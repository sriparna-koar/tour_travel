
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

// import React, { useState,useEffect } from 'react';
// import axios from 'axios';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route, Link, Navigate,useNavigate  } from 'react-router-dom';

// import SignUp from './components/Signup';
// import Home from './components/Home';
// import Login from './components/Login';
// import BookingForm from './components/BookingForm';
// import Hotel from './components/Hotel';
// import Weather from './components/Weather';
// import Navbar from './components/Navbar';
// // import Chat from './components/Chat';
// const AddTrip = () => {
//   const [tripDate, setTripDate] = useState('');
//   const [name, setName] = useState('');
//   const [hotelName, setHotelName] = useState('');
//   const [price, setPrice] = useState('');
//   const [locationVisited, setLocationVisited] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();
//   const isLoggedIn = localStorage.getItem('isLoggedIn');

//   useEffect(() => {
//     if (!isLoggedIn) {
//       navigate('/login');
//     }
//   }, [isLoggedIn, navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('https://tour-travel-uuoe.onrender.com/addtrip', { tripDate, name, hotelName, price, locationVisited });
//       setMessage('Trip added successfully');
//     } catch (error) {
//       console.error(error);
//       setMessage('Error adding trip');
//     }
//   };

//   return (
//     <div className="add-trip-container">
//       <h2>Add Trip</h2>
//       <form onSubmit={handleSubmit} className="add-trip-form">
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="tripDate">Trip Date:</label>
//           <input type="date" id="tripDate" value={tripDate} onChange={(e) => setTripDate(e.target.value)} placeholder="Enter Trip date"required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="hotelName">Hotel Name:</label>
//           <input type="text" id="hotelName" value={hotelName} onChange={(e) => setHotelName(e.target.value)} placeholder="Hotel Name" required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="price">Price:</label>
//           <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="locationVisited">Visited Location:</label>
//           <input type="text" id="locationVisited" value={locationVisited} onChange={(e) => setLocationVisited(e.target.value)} placeholder="Visited Location" required />
//         </div>

//         <button type="submit" className="button">Add Trip</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };


// const AllTrips = () => {
//   const [tripDetails, setTripDetails] = useState([]);
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const isLoggedIn = localStorage.getItem('isLoggedIn');

//   const fetchTrips = async () => {
//     try {
//       const response = await axios.get('https://tour-travel-uuoe.onrender.com/trips');
//       setTripDetails(response.data.trips);
//     } catch (error) {
//       console.error(error);
//       setMessage('Error fetching trips');
//     }
//   };

//   useEffect(() => {
//     if (!isLoggedIn) {
//       navigate('/login');
//     }
//   }, [isLoggedIn, navigate]);

//   useEffect(() => {
//     fetchTrips();
//   }, []);

//   const handleDelete = async (tripId) => {
//     try {
//       const response = await axios.delete(`https://tour-travel-uuoe.onrender.com/deletetrip/${tripId}`);
//       console.log('Trip deleted:', response.data);
//       fetchTrips(); // Call fetchTrips after successful deletion
//     } catch (error) {
//       console.error('Error deleting trip:', error);
//       setMessage('Internal server error.');
//     }
//   };

//   return (
//     <div className="all-trips-container">
//       <h2>All Trips</h2>
//       {tripDetails.length === 0 ? (
//         <p>No trips available</p>
//       ) : (
//         <ul className="trip-list">
//           {tripDetails.map((trip) => (
//             <li key={trip._id} className="trip-item">
//               <div className="trip-details">
//                 <p><strong>Name:</strong> {trip.name}</p>
//                 <p><strong>Trip Date:</strong> {trip.tripDate}</p>
//                 <p><strong>Hotel Name:</strong> {trip.hotelName}</p>
//                 <p><strong>Location Visited:</strong> {trip.locationVisited}</p>
//                 <p><strong>Price:</strong> {trip.price}</p>
//               </div>
//               <button className="delete-button" onClick={() => handleDelete(trip._id)}>Delete Trip</button>
//             </li>
//           ))}
//         </ul>
//       )}
//       {message && <p className="error-message">{message}</p>}
//     </div>
//   );
// };


// const App = () => {
//   return (
//     <Router>
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/addtrip" element={<AddTrip />} />
//         <Route path="/alltrip" element={<AllTrips />} />
//         <Route path="/hotels" element={<Hotel />} />
//         <Route path="/booking" element={<BookingForm />} />
//         <Route path="/weather" element={<Weather />} />
//         {/* <Route path="/Chat" element={<Chat />} /> */}
//       </Routes>
//     </div>
//   </Router>
//   );
// };

// export default App;
