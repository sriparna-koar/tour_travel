import React from 'react';

const SignUpIcon = () => (
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
    className="feather feather-user-plus"
  >
    <path d="M16 20v-2m0 0V12m0 2H8m0 0-4-4 4-4m4 4h8" />
  </svg>
);

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
    className="feather feather-home"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
    <polyline points="9 22 9 12 15 12 15 22" />
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
    className="feather feather-map"
  >
    <circle cx="12" cy="10" r="3" />
    <line x1="12" y1="10" x2="12" y2="21" />
    <path d="M12 21l4.75-7a3 3 0 0 0-5.5 0L12 21z" />
  </svg>
);

export { SignUpIcon, HomeIcon, AllTripsIcon };
