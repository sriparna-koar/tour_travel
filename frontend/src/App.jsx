

import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate,useNavigate  } from 'react-router-dom';
// import Chat from './Chat';
import BookingForm from './components/BookingForm';
import Hotel from './components/Hotel';
import Weather from './components/Weather';

// const SignUp = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phone, setPhone] = useState('');
//   const [location, setLocation] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/signup', { username, email, password, phone, location });
//       setMessage('User created successfully');
//     } catch (error) {
//       console.error(error);
//       setMessage('Error creating user');
//     }
//   };

//   return (
//     <div className="signup-container animate__animated animate__fadeIn">
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//         <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
//         <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" required />
//         <button type="submit" className="animate__animated animate__bounceIn">Sign Up</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };
const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://tour-travel-uuoe.onrender.com/signup', { username, email, password, phone, location });
      setMessage('User created successfully');
    } catch (error) {
      console.error(error);
      setMessage('Error creating user');
    }
  };

  return (
    <div className="signup-container animate__animated animate__fadeIn">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
        </div>
        <div className="form-group">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        </div>
        <div className="form-group">
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        </div>
        <div className="form-group">
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
        </div>
        <div className="form-group">
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" required />
        </div>
        <button type="submit" className="animate__animated animate__bounceIn">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://tour-travel-uuoe.onrender.com/login', { email, password });
      console.log(response.data);
      setMessage('Login successful');
      localStorage.setItem('isLoggedIn', true);
      setIsLoggedIn(true);
      navigate('/addtrip');
    } catch (error) {
      console.error(error);
      setMessage('Error logging in');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    setEmail('');
    setPassword('');
    navigate('/signup');
  };

  if (isLoggedIn) {
    return <Navigate to="/addtrip" />;
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit" className="login-button">Login</button>
      </form>
      {message && <p className="login-message">{message}</p>}
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
 
//   useEffect(() => {
//     setEmail('');
//     setPassword('');
//   }, []);
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
      
//       const response = await axios.post('http://localhost:5000/login', { email, password });
//       console.log(response.data); 
//       setMessage('Login successful');
//       localStorage.setItem('isLoggedIn', true);
//       setIsLoggedIn(true); 
//       navigate('/addtrip'); 


//     } catch (error) {
//       console.error(error);
//       setMessage('Error logging in');
//     }
//   };
//   const handleLogout = () => {

//     setIsLoggedIn(false);

//     localStorage.removeItem('isLoggedIn');
//     setEmail('');
//     setPassword('');
//     navigate('/signup');
//   };
  

//   if (isLoggedIn) {
 
//     return <Navigate to="/addtrip" />;
//   }
//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//         <button type="submit">Login</button>
//       </form>
//       {message && <p>{message}</p>}
//       <button onClick={()=>handleLogout()}>Logout</button>
//     </div>
//   );
// };

const AddTrip = () => {
  const [tripDate, setTripDate] = useState('');
  const [name, setName] = useState('');
  const [hotelName, setHotelName] = useState('');
  const [price, setPrice] = useState('');
  const [locationVisited, setLocationVisited] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://tour-travel-uuoe.onrender.com/addtrip', { tripDate, name, hotelName, price, locationVisited });
      setMessage('Trip added successfully');
    } catch (error) {
      console.error(error);
      setMessage('Error adding trip');
    }
  };

  return (
    <div className="add-trip-container">
      <h2>Add Trip</h2>
      <form onSubmit={handleSubmit} className="add-trip-form">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" required />
        <input type="date" value={tripDate} onChange={(e) => setTripDate(e.target.value)} placeholder="Trip Date" required />
        <input type="text" value={hotelName} onChange={(e) => setHotelName(e.target.value)} placeholder="Hotel Name" required />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
        <input type="text" value={locationVisited} onChange={(e) => setLocationVisited(e.target.value)} placeholder="Visited Location" required />

        <button type="submit" className="button">Add Trip</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};
const AllTrips = () => {
  const [tripDetails, setTripDetails] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem('isLoggedIn');

  const fetchTrips = async () => {
    try {
      const response = await axios.get('https://tour-travel-uuoe.onrender.com/trips');
      setTripDetails(response.data.trips);
    } catch (error) {
      console.error(error);
      setMessage('Error fetching trips');
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    fetchTrips();
  }, []);

  const handleDelete = async (tripId) => {
    try {
      const response = await axios.delete(`https://tour-travel-uuoe.onrender.com/deletetrip/${tripId}`);
      console.log('Trip deleted:', response.data);
      fetchTrips(); // Call fetchTrips after successful deletion
    } catch (error) {
      console.error('Error deleting trip:', error);
      setMessage('Internal server error.');
    }
  };

  return (
    <div className="all-trips-container">
      <h2>All Trips</h2>
      {tripDetails.length === 0 ? (
        <p>No trips available</p>
      ) : (
        <ul className="trip-list">
          {tripDetails.map((trip) => (
            <li key={trip._id} className="trip-item">
              <div className="trip-details">
                <p><strong>Name:</strong> {trip.name}</p>
                <p><strong>Trip Date:</strong> {trip.tripDate}</p>
                <p><strong>Hotel Name:</strong> {trip.hotelName}</p>
                <p><strong>Location Visited:</strong> {trip.locationVisited}</p>
                <p><strong>Price:</strong> {trip.price}</p>
              </div>
              <button className="delete-button" onClick={() => handleDelete(trip._id)}>Delete Trip</button>
            </li>
          ))}
        </ul>
      )}
      {message && <p className="error-message">{message}</p>}
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <div>
        <h2>Explore Our Trips</h2>
         <p>We provide the details of the trips and help you to track your trip in a year and total spend u spend in a year.</p>
      
      </div>
    </div>
  );
};
const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
          <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/signup" className="nav-link">Sign Up</Link>
            </li>
            <li>
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li>
              <Link to="/addtrip" className="nav-link">Add Trip</Link>
            </li>
            <li>
              <Link to="/alltrip" className="nav-link">All Trips</Link>
            </li>
            <li>
              <Link to="/booking" className="nav-link">Booking Details</Link>
            </li>
            <li>
              <Link to="/weather" className="nav-link">Weather</Link>
            </li>
            <li>
              <Link to="/hotels" className="nav-link">Sample Hotels</Link>
            </li>
            {/* <li>
              <Link to="/Chat" className="nav-link">Chat</Link>
            </li> */}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addtrip" element={<AddTrip />} />
          <Route path="/alltrip" element={<AllTrips />} />
          <Route path="/hotels" element={<Hotel />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/weather" element={<Weather />} />
          {/* <Route path="/Chat" element={<Chat />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
