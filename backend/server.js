// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();

// app.use(bodyParser.json());
// app.use(cors());

// mongoose.connect('mongodb+srv://koarsk03:oaxp0kEphI7v4Y27@cluster0.ucd2ssd.mongodb.net/', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const UserSchema = new mongoose.Schema({
//   email: { type: String, required: true },
//   password: { type: String, required: true },
// });

// const User = mongoose.model('User', UserSchema);

// app.post('/signup', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ email, password: hashedPassword });
//     await user.save();
//     res.status(201).send('User created successfully');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error creating user');
//   }
// });

// app.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).send('User not found');
//     }
//     const passwordMatch = await bcrypt.compare(password, user.password);
//     if (!passwordMatch) {
//       return res.status(401).send('Invalid credentials');
//     }
//     const token = jwt.sign({ id: user._id }, 'secret');
//     res.json({ token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error logging in');
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));









// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const userRoutes = require('./controllers/userController');
// const tripController = require('./controllers/tripController');
// const { verifyToken } = require('./middlewares/authMiddleware');

// const app = express();

// app.use(bodyParser.json());
// app.use(cors());

// mongoose.connect('mongodb+srv://koarsk03:oaxp0kEphI7v4Y27@cluster0.ucd2ssd.mongodb.net/', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// app.post('/signup', userRoutes.signup);
// app.post('/login', userRoutes.login);

// app.get('/protected', verifyToken, (req, res) => {
//   res.send('This is a protected route');
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));






// server.js

// server.js

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

// Protected route
app.get('/protected', verifyToken, (req, res) => {
  res.send('This is a protected route');
});

// Trip routes
app.post('/addtrip', tripController.addTrip); // Corrected URL path
app.get('/trips',  tripController.getTripsPastYear);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
