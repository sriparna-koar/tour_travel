
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./controllers/userController');
const tripController = require('./controllers/tripController');
const { verifyToken } = require('./middlewares/authMiddleware');
const bookingController = require('./controllers/bookingController');
const hotelController = require('./controllers/hotelController');
const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://koarsk03:czBOQJPJnyItRbMp@cloudpadproject.qugmdjn.mongodb.net/', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});
app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});
// Routes
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
