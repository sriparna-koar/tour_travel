
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const userRoutes = require('./controllers/userController');
// const tripController = require('./controllers/tripController');
// const { verifyToken } = require('./middlewares/authMiddleware');
// const bookingController = require('./controllers/bookingController');
// const hotelController = require('./controllers/hotelController');
// const Amadeus = require('amadeus');
// const paymentController = require('./controllers/paymentController');
// const app = express();

// app.use(bodyParser.json());
// app.use(cors());

// mongoose.connect('mongodb+srv://koarsk03:czBOQJPJnyItRbMp@cloudpadproject.qugmdjn.mongodb.net/', {
  
// });
// app.get('/', (request, response) => {
//   console.log(request);
//   return response.status(234).send('Welcome To MERN Stack Tutorial');
// });



// app.post('/signup', userRoutes.signup);
// app.post('/login', userRoutes.login);
// app.post('/logout', userRoutes.logout);

// app.get('/protected', verifyToken, (req, res) => {
//   res.send('This is a protected route');
// });

// app.post('/addtrip', tripController.addTrip); 
// app.get('/trips',  tripController.getAllTrips);
// app.delete('/deletetrip/:id', tripController.deleteTrip);
// app.post('/create', bookingController.createBooking);
// app.post('/hotels', hotelController.addHotel);
// app.get('/hotels', hotelController.getAllHotels);
// app.post('/create-order', paymentController.createOrder);
// app.post('/verify-payment', paymentController.verifyPayment);
// // const PORT = 5000;
// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./controllers/userController');
const tripController = require('./controllers/tripController');
const { verifyToken } = require('./middlewares/authMiddleware');
const bookingController = require('./controllers/bookingController');
const hotelController = require('./controllers/hotelController');
const paymentController = require('./controllers/paymentController');

// Import Google Generative AI
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config(); // Load environment variables

const app = express();

app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://koarsk03:czBOQJPJnyItRbMp@cloudpadproject.qugmdjn.mongodb.net/', {
  // Removed deprecated options
});
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB Atlas');
});
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});

// User Routes
app.post('/signup', userRoutes.signup);
app.post('/login', userRoutes.login);
app.post('/logout', userRoutes.logout);

app.get('/protected', verifyToken, (req, res) => {
  res.send('This is a protected route');
});

// Trip Routes
app.post('/addtrip', tripController.addTrip);
app.get('/trips', tripController.getAllTrips);
app.delete('/deletetrip/:id', tripController.deleteTrip);

// Booking Routes
app.post('/create', bookingController.createBooking);

// Hotel Routes
app.post('/hotels', hotelController.addHotel);
app.get('/hotels', hotelController.getAllHotels);

// Payment Routes
app.post('/create-order', paymentController.createOrder);
app.post('/verify-payment', paymentController.verifyPayment);

// --- Generative AI Routes ---
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" }); // You can choose different models like 'gemini-pro-vision' for image-related tasks

// 1. Personalized Hotel Recommendation
app.post('/ai/recommendation', async (req, res) => {
  const { hotelName, location, price } = req.body;
  if (!hotelName || !location || !price) {
    return res.status(400).json({ success: false, message: "Missing hotel details for recommendation." });
  }

  try {
    const prompt = `Given the hotel details: Name - ${hotelName}, Location - ${location}, Price - $${price}/night. Provide a unique, concise (max 50 words) and compelling selling point or a short, engaging description for this hotel that would attract a traveler looking for a good deal and memorable experience. Focus on what makes it special based on its name, location, and price.`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    res.json({ success: true, recommendation: text });
  } catch (error) {
    console.error("Error generating AI recommendation:", error);
    res.status(500).json({ success: false, message: "Error generating recommendation." });
  }
});

// 2. Review Summarization
app.post('/ai/summarize-reviews', async (req, res) => {
  const { reviews } = req.body;
  if (!reviews || !Array.isArray(reviews) || reviews.length === 0) {
    return res.status(400).json({ success: false, message: "No reviews provided for summarization." });
  }

  try {
    const prompt = `Summarize the following hotel reviews into a concise paragraph, highlighting key positive and negative sentiments:\n\n${reviews.join('\n\n')}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    res.json({ success: true, summary: text });
  } catch (error) {
    console.error("Error summarizing reviews:", error);
    res.status(500).json({ success: false, message: "Error summarizing reviews." });
  }
});



const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));