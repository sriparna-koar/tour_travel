
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
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Card, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { MdOutlineDateRange, MdHotel, MdAttachMoney, MdLocationOn, MdPerson } from "react-icons/md";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const AddTrip = () => {
  const [tripDate, setTripDate] = useState(null);
  const [name, setName] = useState("");
  const [hotelName, setHotelName] = useState("");
  const [price, setPrice] = useState("");
  const [locationVisited, setLocationVisited] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://tour-travel-uuoe.onrender.com/addtrip", {
        tripDate: tripDate ? tripDate.format("YYYY-MM-DD") : "",
        name,
        hotelName,
        price,
        locationVisited,
      });
      setMessage("Trip added successfully");
    } catch (error) {
      console.error(error);
      setMessage("Error adding trip");
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="flex justify-center items-center min-h-screen  p-4">
        <Card className="p-6 rounded-lg shadow-xl w-full max-w-md bg-white">
          <Typography variant="h4" className="text-center text-black font-bold mb-4">
            Add a New Trip
          </Typography>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2">
              <MdPerson className="text-indigo-600 text-xl" />
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineDateRange className="text-indigo-600 text-xl" />
              <DatePicker
                label="Trip Date"
                value={tripDate}
                onChange={(newValue) => setTripDate(dayjs(newValue))}
                slotProps={{ textField: { fullWidth: true, variant: "outlined" } }}
              />
            </div>
            <div className="flex items-center gap-2">
              <MdHotel className="text-indigo-600 text-xl" />
              <TextField
                label="Hotel Name"
                variant="outlined"
                fullWidth
                value={hotelName}
                onChange={(e) => setHotelName(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <MdAttachMoney className="text-indigo-600 text-xl" />
              <TextField
                label="Price"
                type="number"
                variant="outlined"
                fullWidth
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <MdLocationOn className="text-indigo-600 text-xl" />
              <TextField
                label="Visited Location"
                variant="outlined"
                fullWidth
                value={locationVisited}
                onChange={(e) => setLocationVisited(e.target.value)}
                required
              />
            </div>
            <Button type="submit" variant="contained" fullWidth className="bg-indigo-700 hover:bg-indigo-800 text-white">
              Add Trip
            </Button>
          </form>
          {message && (
            <Typography className="text-center mt-4 text-green-600 font-medium">
              {message}
            </Typography>
          )}
        </Card>
      </div>
    </LocalizationProvider>
  );
};

export default AddTrip;

