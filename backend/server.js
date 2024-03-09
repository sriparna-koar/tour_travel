

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./controllers/userController');
const tripController = require('./controllers/tripController');
const { verifyToken } = require('./middlewares/authMiddleware');

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://koarsk03:czBOQJPJnyItRbMp@cloudpadproject.qugmdjn.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User routes
app.post('/signup', userRoutes.signup);
app.post('/login', userRoutes.login);
app.post('/logout', userRoutes.logout);
// Proapp.post('/login', userRoutes.login);tected route
app.get('/protected', verifyToken, (req, res) => {
  res.send('This is a protected route');
});

// Trip routes
app.post('/addtrip', tripController.addTrip); // Corrected URL path
app.get('/trips',  tripController.getTripsPastYear);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
