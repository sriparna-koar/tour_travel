
import React from 'react';
import { Link } from 'react-router-dom';

const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const  SignUpIcon= () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.5 6c0-1.105.895-2 2-2s2 .895 2 2c0 1.054-.828 2-1.85 2-.542 0-1.07-.281-1.45-.75" />
      <path d="M15 11c0 2.209-1.791 4-4 4s-4-1.791-4-4V7c0-1.105.895-2 2-2h4c1.105 0 2 .895 2 2v4z" />
      <path d="M14 18.002c-.88 0-1.608.658-1.72 1.502l-.003.076c-.03.233.143.43.375.43h3.696c.229 0 .41-.202.379-.434l-.002-.065C15.61 18.66 14.882 18.002 14 18.002zM10 18h4" />
    </svg>
  );
  

  
  
  

  

  const LoginIcon = () => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM19 21H5c-2.75 0-5-2.25-5-5 0-2.76 2.25-5 5-5h14c2.75 0 5 2.24 5 5 0 2.75-2.25 5-5 5z"/>
  </svg>
);

const AddTripIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const AllTripsIcon = () => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const BookingDetailsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
  </svg>
);

const HotelsIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="7" y="10" width="10" height="10" rx="2" ry="2" />
      <path d="M11 7h2v3h-2zM6 15h12v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-3z" />
    </svg>
  );
  
const WeatherIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v2M7 7l2.5 2.5M17 7l-2.5 2.5M4 12h16M5.6 15.6l2.8-2.8M16.6 15.6l-2.8-2.8M7 17l2.5-2.5M17 17l-2.5-2.5M12 21v-2" />
    </svg>
  );
  

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" className="nav-link">
            <HomeIcon /> Home
          </Link>
        </li>
        <li>
          <Link to="/signup" className="nav-link">
            <SignUpIcon /> Sign Up
          </Link>
        </li>
        <li>
          <Link to="/login" className="nav-link">
            <LoginIcon /> Login
          </Link>
        </li>
        <li>
          <Link to="/addtrip" className="nav-link">
            <AddTripIcon /> Add Trip
          </Link>
        </li>
        <li>
          <Link to="/alltrip" className="nav-link">
            <AllTripsIcon /> All Trips
          </Link>
        </li>
        <li>
          <Link to="/booking" className="nav-link">
            <BookingDetailsIcon /> Booking Details
          </Link>
        </li>
        <li>
          <Link to="/hotels" className="nav-link">
            <HotelsIcon /> Sample Hotels
          </Link>
        </li>
        <li>
          <Link to="/weather" className="nav-link">
            <WeatherIcon /> Weather
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
