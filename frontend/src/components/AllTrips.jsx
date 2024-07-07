import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AllTrips = () => {
  const [tripDetails, setTripDetails] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  const fetchTrips = async () => {
    try {
      const response = await axios.get('https://tour-travel-uuoe.onrender.com/trips');
      setTripDetails(response.data.trips);
    } catch (error) {
      console.error(error);
      setMessage('Error fetching trips');
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    fetchTrips();
  }, []);

  const handleDelete = async (tripId) => {
    try {
      await axios.delete(`https://tour-travel-uuoe.onrender.com/deletetrip/${tripId}`);
      fetchTrips(); // Call fetchTrips after successful deletion
    } catch (error) {
      console.error('Error deleting trip:', error);
      setMessage('Internal server error.');
    }
  };

  return (
    <div className="all-trips-container">
      <h2>All Trips</h2>
      {tripDetails.length === 0 ? (
        <p>No trips available</p>
      ) : (
        <ul className="trip-list">
          {tripDetails.map((trip) => (
            <li key={trip._id} className="trip-item">
              <div className="trip-details">
                <p><strong>Name:</strong> {trip.name}</p>
                <p><strong>Trip Date:</strong> {trip.tripDate}</p>
                <p><strong>Hotel Name:</strong> {trip.hotelName}</p>
                <p><strong>Location Visited:</strong> {trip.locationVisited}</p>
                <p><strong>Price:</strong> {trip.price}</p>
              </div>
              <button className="delete-button" onClick={() => handleDelete(trip._id)}>Delete Trip</button>
            </li>
          ))}
        </ul>
      )}
      {message && <p className="error-message">{message}</p>}
    </div>
  );
};

export default AllTrips;
