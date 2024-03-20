// // controllers/bookingController.js

// const Booking = require('../models/booking');

// exports.createBooking = async (req, res) => {
//   try {
//     const {
//       email,
//       phone,
//       entryTime,
//       exitTime,
//       numberOfPersons,
//       numberOfDays,
//       priceAverage
//     } = req.body;

//     const booking = new Booking({
//       email,
//       phone,
//       entryTime,
//       exitTime,
//       numberOfPersons,
//       numberOfDays,
//       priceAverage
//     });

//     await booking.save();

//     res.status(201).json({ message: 'Booking created successfully' });
//   } catch (error) {
//     console.error('Error creating booking:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };


require('dotenv').config(); // Load environment variables
const Booking = require('../models/booking');
const nodemailer = require('nodemailer');

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS, // Your email address from environment variable
    pass: process.env.EMAIL_PASSWORD // Your email password from environment variable
  }
});

exports.createBooking = async (req, res) => {
  try {
    const {
      email,
      phone,
      entryTime,
      exitTime,
      numberOfPersons,
      numberOfDays,
      priceAverage
    } = req.body;

    const booking = new Booking({
      email,
      phone,
      entryTime,
      exitTime,
      numberOfPersons,
      numberOfDays,
      priceAverage
    });

    await booking.save();

    // Send booking details to your email
    const mailOptions = {
      from: process.env.EMAIL_ADDRESS, // Your email address from environment variable
      to: process.env.EMAIL_ADDRESS, // Your email address from environment variable
      subject: 'New Booking Details',
      text: `
        New Booking Details:
        Email: ${email}
        Phone: ${phone}
        Entry Time: ${entryTime}
        Exit Time: ${exitTime}
        Number of Persons: ${numberOfPersons}
        Number of Days: ${numberOfDays}
        Price Average: ${priceAverage}
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Booking created successfully' });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
