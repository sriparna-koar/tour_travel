import React, { useState,useEffect } from 'react';
const Hotel = () => {
    const [hotels, setHotels] = useState([]);
  
    useEffect(() => {
      const fetchHotels = async () => {
        try {
          const response = await fetch('http://localhost:5000/hotels');
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
      <div>
        <h1>Hotels</h1>
        {hotels.map(hotel => (
          <div key={hotel._id}>
            <img src={hotel.picture} alt={hotel.name} />
            <h2>{hotel.name}</h2>
            <p>Price: ${hotel.price}</p>
            <p>Location: {hotel.location}</p>
            <p>Food Supply: {hotel.foodSupply ? 'Available' : 'Not Available'}</p>
            <p>Nearby Features: {hotel.nearbyFeatures.join(', ')}</p>
          </div>
        ))}
      </div>
    );
  };
  export default Hotel;