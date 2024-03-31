
// import React, { useState, useEffect } from 'react';
// import './Login.css';
// import axios from 'axios';
// import { BrowserRouter as Navigate,useNavigate  } from 'react-router-dom';
// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const navigate = useNavigate();
  
//     useEffect(() => {
//       setEmail('');
//       setPassword('');
//     }, []);
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//         const response = await axios.post('https://tour-travel-uuoe.onrender.com/login', { email, password });
//         console.log(response.data);
//         setMessage('Login successful');
//         localStorage.setItem('isLoggedIn', true);
//         setIsLoggedIn(true);
//         navigate('/addtrip');
//       } catch (error) {
//         console.error(error);
//         setMessage('Error logging in');
//       }
//     };
  
//     const handleLogout = () => {
//       setIsLoggedIn(false);
//       localStorage.removeItem('isLoggedIn');
//       setEmail('');
//       setPassword('');
//       navigate('/signup');
//     };
  
//     if (isLoggedIn) {
//       return <Navigate to="/addtrip" />;
//     }
  
//     return (
//       <div className="login-container">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit} className="login-form">
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//           <button type="submit" className="login-button">Login</button>
//         </form>
//         {message && <p className="login-message">{message}</p>}
//         <button onClick={handleLogout} className="logout-button">Logout</button>
//       </div>
//     );
//   };
//   export default Login;

import React, { useState, useEffect } from 'react';
import './Login.css'; // Rename the CSS file to Login.css
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
        <div className="container">
            <div className="screen">
                <div className="screen__background">
                    <div className="screen__background__shape screen__background__shape1"></div>
                    <div className="screen__background__shape screen__background__shape2"></div>
                    <div className="screen__background__shape screen__background__shape3"></div>
                    <div className="screen__background__shape screen__background__shape4"></div>
                </div>
                <div className="screen__content">
                    <div className="login">
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit} className="login__form">
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="login__input" placeholder="Email" required />
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="login__input" placeholder="Password" required />
                            </div>
                            <button type="submit" className="login__submit">Login</button>
                        </form>
                        {message && <p className="login__message">{message}</p>}
                        <button onClick={handleLogout} className="logout__button">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
