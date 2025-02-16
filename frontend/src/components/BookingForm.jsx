
import React, { useState } from 'react';
import axios from 'axios';
// import './Booking.css';
import { Card, CardContent, CardHeader } from '@mui/material';
import { Calendar, Clock, Users, CreditCard, Mail, Phone, MapPin } from 'lucide-react';
const BookingForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    entryTime: '',
    exitTime: '',
    numberOfPersons: '',
    numberOfDays: '',
    priceAverage: ''
  });

  const [hotelDetails, setHotelDetails] = useState([]);
  const [searchLocation, setSearchLocation] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('https://tour-travel-uuoe.onrender.com/create', formData);
      alert('Booking created successfully');
      // Clear form after submission
      setFormData({
        email: '',
        phone: '',
        entryTime: '',
        exitTime: '',
        numberOfPersons: '',
        numberOfDays: '',
        priceAverage: ''
      });
    } catch (error) {
      console.error('Error creating booking:', error.response.data.error);
      alert('Error creating booking. Please try again.');
    }
  };
  // const fetchHotelDetails = async (location) => {
  //   try {
  //     const response = await axios({
  //       method: 'GET',
  //       url: `https://engine.hotellook.com/api/v2/cache.json`,
  //       params: {
  //         location,
  //         currency: 'USD',
  //         checkIn: '2025-01-25',
  //         checkOut: '2025-01-30',
  //         limit: 10,
  //       },
  //     });
  
  //     // Log the response to check the data
  //     console.log('Travelpayouts API Response:', response.data);
  
  //     return response.data; // Array of hotels
  //   } catch (error) {
  //     console.error('Error fetching hotel details:', error);
  //     return [];
  //   }
  // };
  
  
  // const fetchHotelDetails = async location => {
  //   try {
  //     const response = await axios({
  //       method: 'GET',
  //       url: 'https://booking-com.p.rapidapi.com/v1/hotels/locations',
  //       params: {
  //         name: location,
  //         locale: 'en-gb'
  //       },
  //       headers: {
  //         'X-RapidAPI-Key': '0ea7eb1741msh4b6b034aea1c498p16ab8djsnc2e94180977e',
  //         'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
  //       }
  //     });
  //     return response.data;
  //   } catch (error) {
  //     console.error('Error fetching hotel details:', error);
  //     return [];
  //   }
  // };
  // const fetchLocationId = async (query) => {
  //   try {
  //     const response = await axios.get('https://maps.googleapis.com/maps/api/place/autocomplete/json', {
  //       params: {
  //         input: query,
  //         key: 'YOUR_GOOGLE_API_KEY', // Replace with your Google API key
  //       },
  //     });
  //     const predictions = response.data.predictions;
  //     if (predictions.length > 0) {
  //       return predictions[0].description; // Use the first matched description or place ID
  //     }
  //     return null;
  //   } catch (error) {
  //     console.error('Error fetching location ID:', error);
  //     return null;
  //   }
  // };
  // const fetchHotelDetails = async (query) => {
  //   try {
  //     // Fetch properly formatted location
  //     const location = await fetchLocationId(query);
  
  //     if (!location) {
  //       console.error('Location not found for query:', query);
  //       return [];
  //     }
  
  //     // Fetch hotel details
  //     const response = await axios.get(`https://engine.hotellook.com/api/v2/cache.json`, {
  //       params: {
  //         location,
  //         currency: 'USD',
  //         checkIn: '2025-01-25',
  //         checkOut: '2025-01-30',
  //         limit: 40,
  //       },
  //     });
  
  //     const hotels = response.data.map((hotel) => ({
  //       hotelId: hotel.hotelId,
  //       hotelName: hotel.hotelName,
  //       location: hotel.location,
  //       priceAvg: hotel.priceAvg,
  //       stars: hotel.stars,
  //     }));
  
  //     return hotels;
  //   } catch (error) {
  //     console.error('Error fetching hotel details:', error);
  //     return [];
  //   }
  // };
  
  const fetchHotelDetails = async (location) => {
    try {
      const response = await axios.get(`https://engine.hotellook.com/api/v2/cache.json`, {
        params: {
          location,
          currency: 'USD',
          checkIn: '2025-01-25',
          checkOut: '2025-01-30',
          limit: 40,
        },
      });

      const hotels = response.data.map((hotel) => ({
        hotelId: hotel.hotelId,
        hotelName: hotel.hotelName,
        location: hotel.location,
        priceAvg: hotel.priceAvg,
        stars: hotel.stars,
      }));

      return hotels;
    } catch (error) {
      console.error('Error fetching hotel details:', error);
      return [];
    }
  };

  const handleSearch = async () => {
    const hotels = await fetchHotelDetails(searchLocation);
    setHotelDetails(hotels);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-xl">
         
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
              Book Your Dream Getaway
            </h2>
            <p className="text-center text-gray-600">
              Fill in the details below to start your adventure
            </p>
       
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 w-full h-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-10 w-full h-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Check-in Date/Time */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="datetime-local"
                    name="entryTime"
                    value={formData.entryTime}
                    onChange={handleChange}
                    className="pl-10 w-full h-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Check-out Date/Time */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="datetime-local"
                    name="exitTime"
                    value={formData.exitTime}
                    onChange={handleChange}
                    className="pl-10 w-full h-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Number of Persons */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Users className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    name="numberOfPersons"
                    placeholder="Number of Guests"
                    value={formData.numberOfPersons}
                    onChange={handleChange}
                    min="1"
                    className="pl-10 w-full h-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Number of Days */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Clock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    name="numberOfDays"
                    placeholder="Duration (Days)"
                    value={formData.numberOfDays}
                    onChange={handleChange}
                    min="1"
                    className="pl-10 w-full h-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Price Average */}
                <div className="relative md:col-span-2">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <CreditCard className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    name="priceAverage"
                    placeholder="Budget per Night ($)"
                    value={formData.priceAverage}
                    onChange={handleChange}
                    min="0"
                    className="pl-10 w-full h-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-101 shadow-lg"
              >
                Book Now
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
  // return (
  //   <div className="booking-form-page">
  //     <div className="booking-form-container">
  //       <div className="booking-form-section">
  //         <h2 className="form-title">Book Your Adventure</h2>
  //         <form onSubmit={handleSubmit} className="booking-form">
  //           <input
  //             type="email"
  //             name="email"
  //             placeholder="Email"
  //             value={formData.email}
  //             onChange={handleChange}
  //             required
  //             className="form-input"
  //           />
  //           <input
  //             type="tel"
  //             name="phone"
  //             placeholder="Phone"
  //             value={formData.phone}
  //             onChange={handleChange}
  //             required
  //             className="form-input"
  //           />
  //           <input
  //             type="datetime-local"
  //             name="entryTime"
  //             value={formData.entryTime}
  //             onChange={handleChange}
  //             required
  //             className="form-input"
  //           />
  //           <input
  //             type="datetime-local"
  //             name="exitTime"
  //             value={formData.exitTime}
  //             onChange={handleChange}
  //             required
  //             className="form-input"
  //           />
  //           <input
  //             type="number"
  //             name="numberOfPersons"
  //             placeholder="Number of Persons"
  //             value={formData.numberOfPersons}
  //             onChange={handleChange}
  //             required
  //             className="form-input"
  //           />
  //           <input
  //             type="number"
  //             name="numberOfDays"
  //             placeholder="Number of Days"
  //             value={formData.numberOfDays}
  //             onChange={handleChange}
  //             required
  //             className="form-input"
  //           />
  //           <input
  //             type="number"
  //             name="priceAverage"
  //             placeholder="Price Average"
  //             value={formData.priceAverage}
  //             onChange={handleChange}
  //             required
  //             className="form-input"
  //           />
  //           <button type="submit" className="submit-button">Book Now</button>
  //         </form>
  //       </div>
  //       {/* <div className="hotel-search-section">
  //         <h3 className="search-title">Search Hotels</h3>
  //         <div className="search-container">
  //           <input
  //             type="text"
  //             placeholder="Search Location"
  //             value={searchLocation}
  //             onChange={e => setSearchLocation(e.target.value)}
  //             className="search-input"
  //           />
  //           <button type="button" onClick={handleSearch} className="search-button">
  //             Search
  //           </button>
  //         </div>
  //         <div className="hotel-details">
  //           {hotelDetails.length > 0 && (
  //             <ul>
  //                {hotelDetails.length > 0 && (
  //             <ul>
  //               {hotelDetails.map((hotel, index) => (
  //                 <li key={index}>
  //                   <strong>Hotel Name:</strong> {hotel.hotelName} <br />
  //                   <strong>Location:</strong> {hotel.location.name}, {hotel.location.country} <br />
  //                   <strong>Price Average:</strong> ${hotel.priceAvg.toFixed(2)} <br />
  //                   <strong>Stars:</strong> {hotel.stars} ★<br />
  //                 </li>
  //               ))}
  //             </ul>
  //           )}
             
  //             </ul>
  //           )}
  //         </div>
  //       </div> */}
  //     </div>
  //   </div>
  // );
};

export default BookingForm;
   {/* {hotelDetails.map((hotel, index) => (
                  <li key={index}>
                    <strong>Name:</strong> {hotel.name}<br />
                    <strong>Number of Hotels:</strong> {hotel.nr_hotels}<br />
                    <strong>Country:</strong> {hotel.country}<br />
                    <strong>Region:</strong> {hotel.region}<br />
                    <strong>Latitude:</strong> {hotel.latitude}<br />
                    <strong>Longitude:</strong> {hotel.longitude}<br />
                  </li>
                ))} */}