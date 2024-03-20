// models/booking.js

const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  entryTime: {
    type: Date,
    required: true
  },
  exitTime: {
    type: Date,
    required: true
  },
  numberOfPersons: {
    type: Number,
    required: true
  },
  numberOfDays: {
    type: Number,
    required: true
  },
  priceAverage: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
