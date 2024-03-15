




import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate,useNavigate  } from 'react-router-dom';
import Chat from './Chat';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/signup', { username, email, password, phone, location });
      setMessage('User created successfully');
    } catch (error) {
      console.error(error);
      setMessage('Error creating user');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" required />
        <button type="submit">Sign Up</button>
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      console.log(response.data);
      setMessage('Login successful');
      localStorage.setItem('isLoggedIn', true);
      navigate('/addtrip'); 

    } catch (error) {
      console.error(error);
      setMessage('Error logging in');
    }
  };
  const handleLogout = () => {

    setIsLoggedIn(false);

    localStorage.removeItem('isLoggedIn');

    navigate('/signup');
  };
  

  if (isLoggedIn) {
 
    return <Navigate to="/addtrip" />;
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
      <button onClick={()=>handleLogout()}>Logout</button>
    </div>
  );
};

const Home = () => {
  return <h1>Welcome to the Home Page!</h1>;
};

const AddTrip = () => {
  // const [customername, setcustomername] = useState('');
  const [tripDate, setTripDate] = useState('');
  const [hotelName, setHotelName] = useState('');
  const [price, setPrice] = useState('');

  const [locationVisited, setlocationVisited] = useState('');
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
      await axios.post('http://localhost:5000/addtrip', { tripDate, hotelName, price,locationVisited });
      setMessage('Trip added successfully');
    } catch (error) {
      console.error(error);
      setMessage('Error adding trip');
    }
  };


  return (
    <div>
      <h2>Add Trip</h2>
      <form onSubmit={handleSubmit}>
      {/* <input type="text" value={customername} onChange={(e) => setcustomername(e.target.value)} placeholder="Customer Name" required /> */}
        <input type="date" value={tripDate} onChange={(e) => setTripDate(e.target.value)} placeholder="Trip Date" required />
        <input type="text" value={hotelName} onChange={(e) => setHotelName(e.target.value)} placeholder="Hotel Name" required />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
    
        <input type="text" value={locationVisited} onChange={(e) => setlocationVisited(e.target.value)} placeholder="Visited Location" required /> {/* New input field */}
        <button type="submit">Add Trip</button>
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
  useEffect(() => {
  
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get('http://localhost:5000/trips');
        setTripDetails(response.data.trips);
      } catch (error) {
        console.error(error);
        setMessage('Error fetching trips');
      }
    };

    fetchTrips();
  }, []);

  return (
    <div>
      <h2>All Trips</h2>
      {tripDetails.length === 0 ? (
        <p>No trips available</p>
      ) : (
        <ul>
          {tripDetails.map(trip => (
            <li key={trip._id}>
              <p>Trip Date: {trip.tripDate}</p>
              <p>Hotel Name: {trip.hotelName}</p>
              <p>Location Visited: {trip.locationVisited}</p>
              <p>Price: {trip.price}</p>
            </li>
          ))}
        </ul>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};
const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = '27e15b0805a28f7ffa546b57b51f108c';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (error) {
      console.error(error);
      setError(error.message);
      setWeatherData(null);
    }
  };
  
  return (
    <div>
      <h2>Weather</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city name" required />
        <button type="submit">Get Weather</button>
      </form>
      {error && <p>{error}</p>}
      {weatherData && (
        <div>
          <h3>Weather in {weatherData.name}</h3>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Weather: {weatherData.weather[0].main}</p>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/addtrip">Add Trip</Link>
            </li>
            <li>
              <Link to="/alltrips">All Trips</Link>
            </li>
            <li>
              <Link to="/weather">Weather</Link>
            </li>
            <li>
              <Link to="/Chat">Chat</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addtrip" element={<AddTrip />} />
          <Route path="/alltrips" element={<AllTrips />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/Chat" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
