import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faEye, faEyeSlash, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './signup.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://tour-travel-uuoe.onrender.com/signup', {
        username,
        email,
        password,
        phone,
        location,
      });
      setMessage('User created successfully');
    } catch (error) {
      console.error(error);
      setMessage('Error creating user');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="outer-container">
      <div className="signup-container animate__animated animate__fadeIn">
        {message && <p className="signup-success-message">{message}</p>}
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          <div className="form-group">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash }
              className="password-icon"
              onClick={togglePasswordVisibility}
            />
          </div>
          <div className="form-group">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              required
            />
          </div>
          <div className="form-group">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              required
            />
          </div>
          <button type="submit" className="animate__animated animate__bounceIn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faEnvelope, faLock, faEye, faEyeSlash, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom'; // For redirection
// import { toast } from 'react-hot-toast'; // For toast messages
// import 'react-toastify/dist/ReactToastify.css'; // For toast styling
// import './signup.css';

// const SignUp = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phone, setPhone] = useState('');
//   const [location, setLocation] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate(); // Initialize navigation

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('https://tour-travel-uuoe.onrender.com/signup', {
//         username,
//         email,
//         password,
//         phone,
//         location,
//       });
      
//       // Show success toast and redirect to /login
//       toast.success('User created successfully');
//       setTimeout(() => {
//         navigate('/login'); // Redirect to login page after a short delay
//       }, 2000); // Delay the redirection for 2 seconds
//     } catch (error) {
//       console.error(error);
//       toast.error('Error creating user');
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="outer-container">
//       <div className="signup-container animate__animated animate__fadeIn">
//         <h2>Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <FontAwesomeIcon icon={faUser} className="icon" />
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Username"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <FontAwesomeIcon icon={faEnvelope} className="icon" />
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <FontAwesomeIcon icon={faLock} className="icon" />
//             <input
//               type={showPassword ? 'text' : 'password'}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//               required
//             />
//             <FontAwesomeIcon
//               icon={showPassword ? faEye : faEyeSlash }
//               className="password-icon"
//               onClick={togglePasswordVisibility}
//             />
//           </div>
//           <div className="form-group">
//             <FontAwesomeIcon icon={faPhone} className="icon" />
//             <input
//               type="text"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               placeholder="Phone"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
//             <input
//               type="text"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               placeholder="Location"
//               required
//             />
//           </div>
//           <button type="submit" className="animate__animated animate__bounceIn">
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
