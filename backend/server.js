

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


app.post('/signup', userRoutes.signup);
app.post('/login', userRoutes.login);
app.post('/logout', userRoutes.logout);

app.get('/protected', verifyToken, (req, res) => {
  res.send('This is a protected route');
});

app.post('/addtrip', tripController.addTrip); 
app.get('/trips',  tripController.getAllTrips);

app.put('/trips/:id', tripController.updateTrip); // Update trip route
app.delete('/trips/:id', tripController.deleteTrip);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
