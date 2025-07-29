// import React, { useState } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faEnvelope, faLock, faEye, faEyeSlash, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
// import './signup.css';

// const SignUp = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phone, setPhone] = useState('');
//   const [location, setLocation] = useState('');
//   const [message, setMessage] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

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
//       setMessage('User created successfully');
//     } catch (error) {
//       console.error(error);
//       setMessage('Error creating user');
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="outer-container">
//       <div className="signup-container animate__animated animate__fadeIn">
//         {message && <p className="signup-success-message">{message}</p>}
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

import axios from 'axios';

import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, Phone, MapPin, Plus, MessageSquare } from 'lucide-react';
const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isFabOpen, setIsFabOpen] = useState(false);

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

  const toggleFab = () => {
    setIsFabOpen(!isFabOpen);
  };
  
  const handleLoginClick = () => {
    window.location.href = '/login';
  };

  const handleMessagesClick = () => {
    window.location.href = '/weather';
  };
 return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      {/* Main Signup Card */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 transform hover:scale-105">
        {/* Decorative Elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-200 rounded-full opacity-20 blur-xl"></div>
        
        {/* Content */}
        <div className="relative z-10 p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
            <p className="text-gray-600">Join us today and start your journey</p>
          </div>

          {message && (
            <div className={`mb-6 p-3 rounded-lg text-center transition-all duration-300 ${message.includes('successfully') ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'}`}>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                <User className="h-5 w-5" />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                <Mail className="h-5 w-5" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                <Lock className="h-5 w-5" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-300 "
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 text-gray-500"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                <Phone className="h-5 w-5" />
              </div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                <MapPin className="h-5 w-5" />
              </div>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <button 
                onClick={handleLoginClick}
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        </div>

        {/* FAB Button with Additional Options */}
        <div className="fixed bottom-6 right-6 z-50">
          <div className="relative">
            {isFabOpen && (
              <div className="absolute bottom-16 right-0 mb-2 space-y-2 transform transition-all duration-300 ease-out">
                <button className="w-12 h-12 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-all duration-200 transform hover:scale-110">
                  <Plus className="h-6 w-6" />
                </button>
                  <button 
                  onClick={handleMessagesClick}
                  className="w-12 h-12 bg-purple-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-purple-600 transition-all duration-200 transform hover:scale-110"
                >
                  <MessageSquare className="h-6 w-6" />
                </button>
              </div>
            )}
            <button
              onClick={toggleFab}
              className={`w-14 h-14 bg-blue-600 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 ${isFabOpen ? 'rotate-45' : ''}`}
            >
              <Plus className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;