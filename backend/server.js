
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./controllers/userController');
const tripController = require('./controllers/tripController');
const { verifyToken } = require('./middlewares/authMiddleware');
const bookingController = require('./controllers/bookingController');
const hotelController = require('./controllers/hotelController');
const Amadeus = require('amadeus');
const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://koarsk03:czBOQJPJnyItRbMp@cloudpadproject.qugmdjn.mongodb.net/', {
  
});
app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});
// Routes
// const amadeus = new Amadeus({
//   clientId: 'LVG1cTAcAyPz98a4aN7KeFbp6QgAURlX',
//   clientSecret: '8r4kmX2Ayk13Tg0f',
// });
// const amadeus = new Amadeus({
//   clientId: 'LVG1cTAcAyPz98a4aN7KeFbp6QgAURlX',
//   clientSecret: '8r4kmX2Ayk13Tg0f',
// });
// console.log('Amadeus shopping:', amadeus.shopping);

// amadeus.shopping.flightOffersSearch.get({
//   originLocationCode: 'JFK',
//   destinationLocationCode: 'LAX',
//   departureDate: '2025-02-15',
//   adults: 1
// }).then(response => {
//   console.log(response.data);
// }).catch(error => {
//   console.error(error.response);
// });

// app.get('/hotels', async (req, res) => {
//   const { cityCode, checkInDate, checkOutDate, adults } = req.query;

//   try {
//     const response = await amadeus.shopping.hotelOffers.get({
//       cityCode,
//       checkInDate,
//       checkOutDate,
//       adults,
//     });
//     res.json(response.data);
//   } catch (error) {
//     console.error('Error fetching hotels:', error);
//     res.status(500).json({ error: 'Failed to fetch hotels' });
//   }
// });


app.post('/signup', userRoutes.signup);
app.post('/login', userRoutes.login);
app.post('/logout', userRoutes.logout);

app.get('/protected', verifyToken, (req, res) => {
  res.send('This is a protected route');
});

app.post('/addtrip', tripController.addTrip); 
app.get('/trips',  tripController.getAllTrips);
app.delete('/deletetrip/:id', tripController.deleteTrip);
app.post('/create', bookingController.createBooking);
app.post('/hotels', hotelController.addHotel);
app.get('/hotels', hotelController.getAllHotels);
const PORT = 5000;
// const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
