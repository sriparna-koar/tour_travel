
import React, { useState } from 'react';
import axios from 'axios';
import './Booking.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    entryTime: '',
    exitTime: '',
    numberOfPersons: '',
    numberOfDays: '',
    priceAverage: ''
  });

  const [hotelDetails, setHotelDetails] = useState([]);
  const [searchLocation, setSearchLocation] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('https://tour-travel-uuoe.onrender.com/create', formData);
      alert('Booking created successfully');
      // Clear form after submission
      setFormData({
        email: '',
        phone: '',
        entryTime: '',
        exitTime: '',
        numberOfPersons: '',
        numberOfDays: '',
        priceAverage: ''
      });
    } catch (error) {
      console.error('Error creating booking:', error.response.data.error);
      alert('Error creating booking. Please try again.');
    }
  };

  const fetchHotelDetails = async location => {
    try {
      const response = await axios({
        method: 'GET',
        url: 'https://booking-com.p.rapidapi.com/v1/hotels/locations',
        params: {
          name: location,
          locale: 'en-gb'
        },
        headers: {
          'X-RapidAPI-Key': '0ea7eb1741msh4b6b034aea1c498p16ab8djsnc2e94180977e',
          'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching hotel details:', error);
      return [];
    }
  };

  const handleSearch = async () => {
    const hotels = await fetchHotelDetails(searchLocation);
    setHotelDetails(hotels);
  };

  return (
    <div className="booking-form-page">
      <div className="booking-form-container">
        <div className="booking-form-section">
          <h2 className="form-title">Book Your Adventure</h2>
          <form onSubmit={handleSubmit} className="booking-form">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="form-input"
            />
            <input
              type="datetime-local"
              name="entryTime"
              value={formData.entryTime}
              onChange={handleChange}
              required
              className="form-input"
            />
            <input
              type="datetime-local"
              name="exitTime"
              value={formData.exitTime}
              onChange={handleChange}
              required
              className="form-input"
            />
            <input
              type="number"
              name="numberOfPersons"
              placeholder="Number of Persons"
              value={formData.numberOfPersons}
              onChange={handleChange}
              required
              className="form-input"
            />
            <input
              type="number"
              name="numberOfDays"
              placeholder="Number of Days"
              value={formData.numberOfDays}
              onChange={handleChange}
              required
              className="form-input"
            />
            <input
              type="number"
              name="priceAverage"
              placeholder="Price Average"
              value={formData.priceAverage}
              onChange={handleChange}
              required
              className="form-input"
            />
            <button type="submit" className="submit-button">Book Now</button>
          </form>
        </div>
        <div className="hotel-search-section">
          <h3 className="search-title">Search Hotels</h3>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search Location"
              value={searchLocation}
              onChange={e => setSearchLocation(e.target.value)}
              className="search-input"
            />
            <button type="button" onClick={handleSearch} className="search-button">
              Search
            </button>
          </div>
          <div className="hotel-details">
            {hotelDetails.length > 0 && (
              <ul>
                {hotelDetails.map((hotel, index) => (
                  <li key={index}>
                    <strong>Name:</strong> {hotel.name}<br />
                    <strong>Number of Hotels:</strong> {hotel.nr_hotels}<br />
                    <strong>Country:</strong> {hotel.country}<br />
                    <strong>Region:</strong> {hotel.region}<br />
                    <strong>Latitude:</strong> {hotel.latitude}<br />
                    <strong>Longitude:</strong> {hotel.longitude}<br />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
