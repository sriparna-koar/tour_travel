// import React from 'react';
// import axios from 'axios';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// const SignUp = () => {
//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/signup', { email, password });
//       console.log('User created successfully');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// };

// const Login = () => {
//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/login', { email, password });
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//       <button type="submit">Login</button>
//     </form>
//   );
// };
// const Home = () => {
//   return <h1>Welcome to the Home Page!</h1>;
// };
// const App = () => {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/signup">Sign Up</Link>
//             </li>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Home />} />  {/* Change this line to use <Routes> instead of <Router> */}
//           <Route path="/signup" element={<SignUp />} /> {/* Use 'element' prop instead of 'component' */}
//           <Route path="/login" element={<Login />} /> {/* Use 'element' prop instead of 'component' */}
//         </Routes> {/* Close <Routes> */}
//       </div>
//     </Router>
//   );
// };

// export default App;





import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate,useNavigate  } from 'react-router-dom';


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
      // setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
      setMessage('Error logging in');
    }
  };
  const handleLogout = () => {
    // Clear authentication state
    setIsLoggedIn(false);
    // Clear authentication status from localStorage upon logout
    localStorage.removeItem('isLoggedIn');
    // Redirect user to the login page
    navigate('/signup');
  };
  
  // const handleLogout = () => {
  //   // Clear authentication state
  //   setIsLoggedIn(false);
  //   // Clear any stored tokens or user information from local storage or session storage
  //   // Redirect user to the login page
  //   navigate('/signup');
  // };
  if (isLoggedIn) {
    // If user is logged in, redirect to home page
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
  const [tripDate, setTripDate] = useState('');
  const [hotelName, setHotelName] = useState('');
  const [price, setPrice] = useState('');
  const [locationVisited, setlocationVisited] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Check if user is logged in
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  useEffect(() => {
    // Redirect to login if user is not logged in
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
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addtrip" element={<AddTrip />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
