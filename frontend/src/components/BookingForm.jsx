// BookingForm.jsx

import React, { useState } from 'react';
import axios from 'axios';


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

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/create', formData);
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

  return (
    <div className="booking-form-container">
      <h2 className="form-title">Book Now</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
        <input type="datetime-local" name="entryTime" value={formData.entryTime} onChange={handleChange} required />
        <input type="datetime-local" name="exitTime" value={formData.exitTime} onChange={handleChange} required />
        <input type="number" name="numberOfPersons" placeholder="Number of Persons" value={formData.numberOfPersons} onChange={handleChange} required />
        <input type="number" name="numberOfDays" placeholder="Number of Days" value={formData.numberOfDays} onChange={handleChange} required />
        <input type="number" name="priceAverage" placeholder="Price Average" value={formData.priceAverage} onChange={handleChange} required />
        <button type="submit" className="submit-button">Book</button>
      </form>
    </div>
  );
};

export default BookingForm;
