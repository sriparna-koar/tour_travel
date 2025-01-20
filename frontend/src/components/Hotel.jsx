
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './Hotel.css'; 

// const Hotel = () => {
//   const [hotels, setHotels] = useState([]);

//   useEffect(() => {
//     const fetchHotels = async () => {
//       try {
//         const response = await fetch('https://tour-travel-uuoe.onrender.com/hotels');
//         if (!response.ok) {
//           throw new Error('Failed to fetch hotels');
//         }
//         const data = await response.json();
//         setHotels(data);  
//       } catch (error) {
//         console.error('Error fetching hotels:', error);
//       }
//     };

//     fetchHotels();
//   }, []);

//   return (
//     <div className="hotel-container">
//       <h1 className="hotel-heading">Our Premium Hotels</h1>
//       <div className="hotel-cards-container">
//         {hotels.map((hotel, index) => (
//           <div key={index} className="hotel-card">
//             <div className="hotel-image-container">
//               <img src={hotel.picture} alt={hotel.name} className="hotel-image" />
//             </div>
//             <div className="hotel-details">
//               <h2 className="hotel-name">{hotel.name}</h2>
//               <p className="hotel-price"><strong>Price:</strong> ${hotel.price}</p>
//               <p className="hotel-location"><strong>Location:</strong> {hotel.location}</p>
//               <p className="hotel-food-supply">
//                 <strong>Food Supply:</strong> {hotel.foodSupply ? 'Available' : 'Not Available'}
//               </p>
//               <p className="hotel-nearby-features">
//                 <strong>Nearby Features:</strong> {hotel.nearbyFeatures.join(', ')}
//               </p>
//               <Link
//                 to={{
//                   pathname: '/booking',
//                   state: { hotel } 
//                 }}
//                 className="book-now-link"
//               >
//                 Book Now
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Hotel;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hotel.css';

const Hotel = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch('https://tour-travel-uuoe.onrender.com/hotels');
        if (!response.ok) {
          throw new Error('Failed to fetch hotels');
        }
        const data = await response.json();
        setHotels(data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <div className="hotel-container">
      <h1 className="hotel-heading">Discover Luxury Stays</h1>
      <div className="hotel-cards-container">
        {hotels.map((hotel, index) => (
          <div key={index} className="hotel-card">
            <div className="hotel-image-container">
              <img src={hotel.picture} alt={hotel.name} className="hotel-image" />
            </div>
            <div className="hotel-details">
              <h2 className="hotel-name">{hotel.name}</h2>
              <p className="hotel-price">${hotel.price} / night</p>
              <p className="hotel-location">{hotel.location}</p>
              <p className="hotel-food-supply">
                {hotel.foodSupply ? 'Food Included' : 'No Food Supply'}
              </p>
              <p className="hotel-nearby-features">
                {hotel.nearbyFeatures.slice(0, 3).join(', ')}...
              </p>
              <Link
                to={{ pathname: '/booking', state: { hotel } }}
                className="book-now-link"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotel;
