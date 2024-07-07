// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './AddTrip.css';
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
//           <input type="date" id="tripDate" value={tripDate} onChange={(e) => setTripDate(e.target.value)} placeholder="Enter Trip date" required />
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

// export default AddTrip;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddTrip.css';

const AddTrip = () => {
  const [tripDate, setTripDate] = useState('');
  const [name, setName] = useState('');
  const [hotelName, setHotelName] = useState('');
  const [price, setPrice] = useState('');
  const [locationVisited, setLocationVisited] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://tour-travel-uuoe.onrender.com/addtrip', { tripDate, name, hotelName, price, locationVisited });
      setMessage('Trip added successfully');
    } catch (error) {
      console.error(error);
      setMessage('Error adding trip');
    }
  };

  return (
    <div className="add-trip-container">
      <h2>Add Trip</h2>
      <form onSubmit={handleSubmit} className="add-trip-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="tripDate">Trip Date:</label>
          <input type="date" id="tripDate" value={tripDate} onChange={(e) => setTripDate(e.target.value)} placeholder="Enter Trip date" required />
        </div>
        <div className="form-group">
          <label htmlFor="hotelName">Hotel Name:</label>
          <input type="text" id="hotelName" value={hotelName} onChange={(e) => setHotelName(e.target.value)} placeholder="Hotel Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
        </div>
        <div className="form-group">
          <label htmlFor="locationVisited">Visited Location:</label>
          <input type="text" id="locationVisited" value={locationVisited} onChange={(e) => setLocationVisited(e.target.value)} placeholder="Visited Location" required />
        </div>
        <button type="submit" className="button">Add Trip</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddTrip;
