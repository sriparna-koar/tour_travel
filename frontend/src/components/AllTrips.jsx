// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AllTrips = () => {
//   const [tripDetails, setTripDetails] = useState([]);
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();
//   const isLoggedIn = localStorage.getItem('isLoggedIn');

//   const fetchTrips = async () => {
//     try {
//       const response = await axios.get('https://tour-travel-uuoe.onrender.com/trips');
//       setTripDetails(response.data.trips);
//     } catch (error) {
//       console.error(error);
//       setMessage('Error fetching trips');
//     }
//   };

//   useEffect(() => {
//     if (!isLoggedIn) {
//       navigate('/login');
//     }
//   }, [isLoggedIn, navigate]);

//   useEffect(() => {
//     fetchTrips();
//   }, []);

//   const handleDelete = async (tripId) => {
//     try {
//       await axios.delete(`https://tour-travel-uuoe.onrender.com/deletetrip/${tripId}`);
//       fetchTrips(); // Call fetchTrips after successful deletion
//     } catch (error) {
//       console.error('Error deleting trip:', error);
//       setMessage('Internal server error.');
//     }
//   };

//   return (
//     <div className="all-trips-container">
//       <h2>All Trips</h2>
//       {tripDetails.length === 0 ? (
//         <p>No trips available</p>
//       ) : (
//         <ul className="trip-list">
//           {tripDetails.map((trip) => (
//             <li key={trip._id} className="trip-item">
//               <div className="trip-details">
//                 <p><strong>Name:</strong> {trip.name}</p>
//                 <p><strong>Trip Date:</strong> {trip.tripDate}</p>
//                 <p><strong>Hotel Name:</strong> {trip.hotelName}</p>
//                 <p><strong>Location Visited:</strong> {trip.locationVisited}</p>
//                 <p><strong>Price:</strong> {trip.price}</p>
//               </div>
//               <button className="delete-button" onClick={() => handleDelete(trip._id)}>Delete Trip</button>
//             </li>
//           ))}
//         </ul>
//       )}
//       {message && <p className="error-message">{message}</p>}
//     </div>
//   );
// };

// export default AllTrips;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
      await axios.delete(`https://tour-travel-uuoe.onrender.com/deletetrip/${tripId}`);
      fetchTrips(); // Refresh trips after deletion
    } catch (error) {
      console.error('Error deleting trip:', error);
      setMessage('Internal server error.');
    }
  };

  return (
    <div className="all-trips-container flex justify-center items-center w-full p-8">
      <div className="w-full max-w-7xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">All Trips</h2>
        {tripDetails.length === 0 ? (
          <p className="text-center text-gray-500">No trips available</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="trip-table w-full border-collapse border border-gray-300 rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="p-4 border border-gray-300">Name</th>
                  <th className="p-4 border border-gray-300">Trip Date</th>
                  <th className="p-4 border border-gray-300">Hotel Name</th>
                  <th className="p-4 border border-gray-300">Location Visited</th>
                  <th className="p-4 border border-gray-300">Price</th>
                  <th className="p-4 border border-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tripDetails.map((trip) => (
                  <tr key={trip._id} className="hover:bg-gray-100 transition">
                    <td className="p-4 border border-gray-300">{trip.name}</td>
                    <td className="p-4 border border-gray-300">{trip.tripDate}</td>
                    <td className="p-4 border border-gray-300">{trip.hotelName}</td>
                    <td className="p-4 border border-gray-300">{trip.locationVisited}</td>
                    <td className="p-4 border border-gray-300">{trip.price}</td>
                    <td className="p-4 border border-gray-300 text-center">
                      <button 
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                        onClick={() => handleDelete(trip._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {message && <p className="text-red-500 text-center mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default AllTrips;