
// // import React, { useState, useEffect } from 'react';
// // import './Login.css'; 
// // import axios from 'axios';
// // import { useNavigate, Navigate } from 'react-router-dom';
// // import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

// // const Login = () => {
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [message, setMessage] = useState('');
// //     const [isLoggedIn, setIsLoggedIn] = useState(false);
// //     const [showPassword, setShowPassword] = useState(false);
// //     const navigate = useNavigate();

// //     useEffect(() => {
// //         setEmail('');
// //         setPassword('');
// //     }, []);

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await axios.post('https://tour-travel-uuoe.onrender.com/login', { email, password });
// //             console.log(response.data);
// //             setMessage('Login successful');
// //             localStorage.setItem('isLoggedIn', true);
// //             setIsLoggedIn(true);
// //             navigate('/addtrip');
// //         } catch (error) {
// //             console.error(error);
// //             setMessage('Error logging in');
// //         }
// //     };

// //     const handleLogout = () => {
// //         setIsLoggedIn(false);
// //         localStorage.removeItem('isLoggedIn');
// //         setEmail('');
// //         setPassword('');
// //         navigate('/signup');
// //     };

// //     const togglePasswordVisibility = () => {
// //         setShowPassword(!showPassword);
// //     };

// //     if (isLoggedIn) {
// //         return <Navigate to="/addtrip" />;
// //     }

// //     return (
// //         <div className="container">
// //             <div className="screen">
// //                 <div className="screen__background">
// //                     <div className="screen__background__shape screen__background__shape1"></div>
// //                     <div className="screen__background__shape screen__background__shape2"></div>
// //                     <div className="screen__background__shape screen__background__shape3"></div>
// //                     <div className="screen__background__shape screen__background__shape4"></div>
// //                 </div>
// //                 <div className="screen__content">
// //                     <div className="login">
// //                         <h2>Login</h2>
// //                         <form onSubmit={handleSubmit} className="login__form">
// //                             <div className="login__field">
// //                                 <FaUser className="login__icon" />
// //                                 <input 
// //                                     type="email" 
// //                                     value={email} 
// //                                     onChange={(e) => setEmail(e.target.value)} 
// //                                     className="login__input" 
// //                                     placeholder="Email" 
// //                                     required 
// //                                 />
// //                             </div>
// //                             <div className="login__field">
// //                                 <FaLock className="login__icon1" />
// //                                 <input 
// //                                     type={showPassword ? "text" : "password"} 
// //                                     value={password} 
// //                                     onChange={(e) => setPassword(e.target.value)} 
// //                                     className="login__input" 
// //                                     placeholder="Password" 
// //                                     required 
// //                                 />
// //                                 <button 
// //                                     type="button" 
// //                                     className="toggle-password" 
// //                                     onClick={togglePasswordVisibility}
// //                                 >
// //                                     {showPassword ? <FaEye /> : <FaEyeSlash />}
// //                                 </button>
// //                             </div>
// //                             <button type="submit" className="login__submit">Login</button>
// //                         </form>
// //                         {message && <p className="login__message">{message}</p>}
// //                         <button onClick={handleLogout} className="logout__button">Logout</button>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Login;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, Navigate } from 'react-router-dom';
// import { FaUser, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
// import { MdEmail, MdPassword, MdLogin, MdLogout, MdHelpOutline } from 'react-icons/md';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [showPassword, setShowPassword] = useState(false);
//     const [isFabOpen, setIsFabOpen] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//         setEmail('');
//         setPassword('');
//     }, []);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('https://tour-travel-uuoe.onrender.com/login', { email, password });
//             console.log(response.data);
//             setMessage('Login successful');
//             localStorage.setItem('isLoggedIn', true);
//             setIsLoggedIn(true);
//             navigate('/addtrip');
//         } catch (error) {
//             console.error(error);
//             setMessage('Invalid email or password');
//         }
//     };

//     const handleLogout = () => {
//         setIsLoggedIn(false);
//         localStorage.removeItem('isLoggedIn');
//         setEmail('');
//         setPassword('');
//         navigate('/signup');
//     };

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const toggleFab = () => {
//         setIsFabOpen(!isFabOpen);
//     };

//     if (isLoggedIn) {
//         return <Navigate to="/addtrip" />;
//     }

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 p-4">
//             {/* Main Login Card */}
//             <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 transform hover:scale-[1.01]">
//                 {/* Decorative Elements */}
//                 <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-20 blur-xl"></div>
//                 <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-200 rounded-full opacity-20 blur-xl"></div>
                
//                 {/* Content */}
//                 <div className="relative z-10 p-8">
//                     <div className="text-center mb-8">
//                         <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
//                         <p className="text-gray-600">Sign in to continue your journey</p>
//                     </div>

//                     {message && (
//                         <div className={`mb-6 p-3 rounded-lg text-center ${message.includes('successful') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
//                             {message}
//                         </div>
//                     )}

//                     <form onSubmit={handleSubmit} className="space-y-5">
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
//                                 <MdEmail className="h-5 w-5" />
//                             </div>
//                             <input
//                                 type="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 placeholder="Email"
//                                 required
//                                 className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300"
//                             />
//                         </div>

//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
//                                 <MdPassword className="h-5 w-5" />
//                             </div>
//                             <input
//                                 type={showPassword ? 'text' : 'password'}
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 placeholder="Password"
//                                 required
//                                 className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-300"
//                             />
//                             <button
//                                 type="button"
//                                 onClick={togglePasswordVisibility}
//                                 className="absolute inset-y-0 text-gray-500"
//                             >
//                                 {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
//                             </button>
//                         </div>

//                         <div className="flex items-center justify-between">
//                             <div className="flex items-center">
//                                 <input
//                                     type="checkbox"
//                                     id="remember"
//                                     className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                                 />
//                                 <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
//                                     Remember me
//                                 </label>
//                             </div>
//                             <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
//                                 Forgot password?
//                             </a>
//                         </div>

//                         <button
//                             type="submit"
//                             className="w-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-[1.01] shadow-md"
//                         >
//                             <MdLogin className="mr-2 h-5 w-5" />
//                             Login
//                         </button>
//                     </form>

//                     <div className="mt-6">
//                         <div className="relative">
//                             <div className="absolute inset-0 flex items-center">
//                                 <div className="w-full border-t border-gray-300"></div>
//                             </div>
//                             <div className="relative flex justify-center text-sm">
//                                 <span className="px-2 bg-white text-gray-500">Or continue with</span>
//                             </div>
//                         </div>

//                         <div className="mt-6 grid grid-cols-3 gap-3">
//                             <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
//                                 <FaGoogle className="h-5 w-5 text-red-500" />
//                             </button>
//                             <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
//                                 <FaFacebook className="h-5 w-5 text-blue-600" />
//                             </button>
//                             <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
//                                 <FaTwitter className="h-5 w-5 text-blue-400" />
//                             </button>
//                         </div>
//                     </div>

//                     <div className="mt-6 text-center">
//                         <p className="text-gray-600">
//                             Don't have an account?{' '}
//                             <a href="/signup" className="text-blue-600 hover:text-blue-800 font-medium">
//                                 Sign up
//                             </a>
//                         </p>
//                     </div>
//                 </div>

//                 {/* FAB Button with Additional Options */}
//                 <div className="fixed bottom-6 right-6 z-50">
//                     <div className="relative">
//                         {isFabOpen && (
//                             <div className="absolute bottom-16 right-0 mb-2 space-y-2">
//                                 <button 
//                                     className="w-12 h-12 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-all"
//                                     onClick={handleLogout}
//                                 >
//                                     <MdLogout className="h-6 w-6" />
//                                 </button>
//                                 <button className="w-12 h-12 bg-purple-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-purple-600 transition-all">
//                                     <MdHelpOutline className="h-6 w-6" />
//                                 </button>
//                             </div>
//                         )}
//                         <button
//                             onClick={toggleFab}
//                             className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-700 transition-all transform hover:rotate-45"
//                         >
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Navigate } from 'react-router-dom';
import { FaUser, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdPassword, MdLogin, MdLogout, MdHelpOutline } from 'react-icons/md';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isFabOpen, setIsFabOpen] = useState(false);
    const navigate = useNavigate();

    // Check if user is already logged in
    useEffect(() => {
        const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (loggedIn) {
            navigate('/addtrip');
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');
        
        try {
            // Make sure email and password are trimmed
            const trimmedEmail = email.trim();
            const trimmedPassword = password.trim();
            
            if (!trimmedEmail || !trimmedPassword) {
                setMessage('Email and password are required');
                setIsLoading(false);
                return;
            }
            
            // Add headers to ensure proper content type
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            
            const response = await axios.post(
                'https://tour-travel-uuoe.onrender.com/login', 
                { email: trimmedEmail, password: trimmedPassword },
                config
            );
            
            console.log('Login response:', response.data);
            
            if (response.data && response.status === 200) {
                // Store user data in localStorage if needed
                if (response.data.token) {
                    localStorage.setItem('token', response.data.token);
                }
                
                if (response.data.user) {
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                }
                
                setMessage('Login successful');
                localStorage.setItem('isLoggedIn', 'true');
                
                // Short delay before redirecting
                setTimeout(() => {
                    navigate('/addtrip');
                }, 1000);
            } else {
                throw new Error('Unexpected response format');
            }
        } catch (error) {
            console.error('Login error:', error);
            
            // Check if it's a 401 error specifically
            if (error.response && error.response.status === 401) {
                setMessage('Invalid email or password. Please check your credentials.');
            } else if (error.response && error.response.data) {
                // Use the server's error message if available
                setMessage(error.response.data);
            } else {
                // Generic error message as fallback
                setMessage('Login failed. Please try again later.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setEmail('');
        setPassword('');
        navigate('/signup');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleFab = () => {
        setIsFabOpen(!isFabOpen);
    };

    const handleSignUpClick = () => {
        navigate('/signup');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 p-4">
            {/* Main Login Card */}
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 transform hover:scale-[1.01]">
                {/* Decorative Elements */}
                <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-200 rounded-full opacity-20 blur-xl"></div>
                
                {/* Content */}
                <div className="relative z-10 p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
                        <p className="text-gray-600">Sign in to continue your journey</p>
                    </div>

                    {message && (
                        <div className={`mb-6 p-3 rounded-lg text-center ${message.includes('successful') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                                <MdEmail className="h-5 w-5" />
                            </div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                required
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                                <MdPassword className="h-5 w-5" />
                            </div>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                                className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-300"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-300"
                            >
                                {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
                            </button>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                                    Remember me
                                </label>
                            </div>
                            <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-[1.01] shadow-md ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Logging in...
                                </>
                            ) : (
                                <>
                                    <MdLogin className="mr-2 h-5 w-5" />
                                    Login
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-3">
                            <button 
                                type="button"
                                className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                <FaGoogle className="h-5 w-5 text-red-500" />
                            </button>
                            <button 
                                type="button"
                                className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                <FaFacebook className="h-5 w-5 text-blue-600" />
                            </button>
                            <button 
                                type="button"
                                className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                <FaTwitter className="h-5 w-5 text-blue-400" />
                            </button>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Don't have an account?{' '}
                            <button 
                                onClick={handleSignUpClick}
                                className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                                Sign up
                            </button>
                        </p>
                    </div>
                </div>

                {/* FAB Button with Additional Options */}
                <div className="fixed bottom-6 right-6 z-50">
                    <div className="relative">
                        {isFabOpen && (
                            <div className="absolute bottom-16 right-0 mb-2 space-y-2">
                                <button 
                                    className="w-12 h-12 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-all"
                                    onClick={handleLogout}
                                >
                                    <MdLogout className="h-6 w-6" />
                                </button>
                                <button 
                                    className="w-12 h-12 bg-purple-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-purple-600 transition-all"
                                >
                                    <MdHelpOutline className="h-6 w-6" />
                                </button>
                            </div>
                        )}
                        <button
                            onClick={toggleFab}
                            className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-700 transition-all transform hover:rotate-45"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;