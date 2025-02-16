// import React, { useState } from 'react';
// import { Search, Plane, Building2, Calendar, Users, ArrowRight, Loader2 } from 'lucide-react';
// import { Card, CardContent, CardHeader, Typography } from '@mui/material';
// import { Alert, AlertTitle  } from '@mui/material';

// const TravelSearchApp = () => {
//   const [searchType, setSearchType] = useState('flights');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [results, setResults] = useState([]);

//   const [flightSearch, setFlightSearch] = useState({
//     fromId: '',
//     toId: '',
//     date: '',
//     adults: 1,
//     children: 0,
//     cabinClass: 'ECONOMY'
//   });

//   const [hotelSearch, setHotelSearch] = useState({
//     destination: '',
//     checkIn: '',
//     checkOut: '',
//     adults: 1,
//     children: 0,
//     rooms: 1
//   });

//   const searchFlights = async () => {
//     setLoading(true);
//     setError('');
//     try {
//       const response = await fetch(`https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights?fromId=${flightSearch.fromId}.AIRPORT&toId=${flightSearch.toId}.AIRPORT&pageNo=1&adults=${flightSearch.adults}&children=${flightSearch.children}&sort=BEST&cabinClass=${flightSearch.cabinClass}&currency_code=AED`, {
//         headers: {
//           'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
//           'x-rapidapi-key': '0ea7eb1741msh4b6b034aea1c498p16ab8djsnc2e94180977e'
//         }
//       });
//       const data = await response.json();
//       setResults(data.data || []);
//     } catch (err) {
//       setError('Failed to fetch flights. Please try again.');
//     }
//     setLoading(false);
//   };

//   const searchHotels = async () => {
//     setLoading(true);
//     setError('');
//     try {
//       const response = await fetch(`https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_id=${hotelSearch.destination}&search_type=CITY&adults=${hotelSearch.adults}&children_age=0,17&room_qty=${hotelSearch.rooms}&page_number=1&units=metric&temperature_unit=c&languagecode=en-us&currency_code=AED`, {
//         headers: {
//           'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
//           'x-rapidapi-key': '0ea7eb1741msh4b6b034aea1c498p16ab8djsnc2e94180977e'
//         }
//       });
//       const data = await response.json();
//       setResults(data.data || []);
//     } catch (err) {
//       setError('Failed to fetch hotels. Please try again.');
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="mb-8 text-center">
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">Travel Search</h1>
//           <p className="text-gray-600">Find the best flights and hotels for your next adventure</p>
//         </div>

//         <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
//           <div className="flex gap-4 mb-6">
//             <button
//               onClick={() => setSearchType('flights')}
//               className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 ${
//                 searchType === 'flights' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
//               }`}
//             >
//               <Plane className="w-5 h-5" />
//               Flights
//             </button>
//             <button
//               onClick={() => setSearchType('hotels')}
//               className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 ${
//                 searchType === 'hotels' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
//               }`}
//             >
//               <Building2 className="w-5 h-5" />
//               Hotels
//             </button>
//           </div>

//           {searchType === 'flights' ? (
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//               <input
//                 type="text"
//                 placeholder="From (Airport Code)"
//                 value={flightSearch.fromId}
//                 onChange={(e) => setFlightSearch({...flightSearch, fromId: e.target.value})}
//                 className="p-3 border rounded-lg"
//               />
//               <input
//                 type="text"
//                 placeholder="To (Airport Code)"
//                 value={flightSearch.toId}
//                 onChange={(e) => setFlightSearch({...flightSearch, toId: e.target.value})}
//                 className="p-3 border rounded-lg"
//               />
//               <select
//                 value={flightSearch.cabinClass}
//                 onChange={(e) => setFlightSearch({...flightSearch, cabinClass: e.target.value})}
//                 className="p-3 border rounded-lg"
//               >
//                 <option value="ECONOMY">Economy</option>
//                 <option value="BUSINESS">Business</option>
//                 <option value="FIRST">First Class</option>
//               </select>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//               <input
//                 type="text"
//                 placeholder="Destination"
//                 value={hotelSearch.destination}
//                 onChange={(e) => setHotelSearch({...hotelSearch, destination: e.target.value})}
//                 className="p-3 border rounded-lg"
//               />
//               <input
//                 type="date"
//                 placeholder="Check-in"
//                 value={hotelSearch.checkIn}
//                 onChange={(e) => setHotelSearch({...hotelSearch, checkIn: e.target.value})}
//                 className="p-3 border rounded-lg"
//               />
//               <input
//                 type="date"
//                 placeholder="Check-out"
//                 value={hotelSearch.checkOut}
//                 onChange={(e) => setHotelSearch({...hotelSearch, checkOut: e.target.value})}
//                 className="p-3 border rounded-lg"
//               />
//             </div>
//           )}

//           <div className="flex justify-center">
//             <button
//               onClick={searchType === 'flights' ? searchFlights : searchHotels}
//               disabled={loading}
//               className="bg-blue-600 text-white py-3 px-8 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
//             >
//               {loading ? (
//                 <Loader2 className="w-5 h-5 animate-spin" />
//               ) : (
//                 <>
//                   <Search className="w-5 h-5" />
//                   Search {searchType === 'flights' ? 'Flights' : 'Hotels'}
//                 </>
//               )}
//             </button>
//           </div>
//         </div>

//         {error && (
//           <Alert variant="destructive" className="mb-6">
//             <AlertTitle >{error}</AlertTitle >
//           </Alert>
//         )}

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {results.map((result, index) => (
//             <Card key={index} className="hover:shadow-xl transition-shadow">
//               <CardHeader>
//                 <Typography className="text-xl">
//                   {searchType === 'flights' ? (
//                     <div className="flex items-center gap-2">
//                       <span>{result.departure}</span>
//                       <ArrowRight className="w-4 h-4" />
//                       <span>{result.arrival}</span>
//                     </div>
//                   ) : (
//                     result.name
//                   )}
//                 </Typography>
//               </CardHeader>
//               <CardContent>
//                 {searchType === 'flights' ? (
//                   <div className="space-y-2">
//                     <p className="text-gray-600">Duration: {result.duration}</p>
//                     <p className="text-gray-600">Airline: {result.airline}</p>
//                     <p className="font-bold text-lg">Price: {result.price}</p>
//                   </div>
//                 ) : (
//                   <div className="space-y-2">
//                     <p className="text-gray-600">{result.location}</p>
//                     <p className="text-gray-600">Rating: {result.rating}/10</p>
//                     <p className="font-bold text-lg">Price: {result.price}</p>
//                   </div>
//                 )}
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TravelSearchApp;
// import React, { useState } from 'react';
// import { Search, Plane, Building2, Calendar, Users, ArrowRight, Loader2 } from 'lucide-react';
// import { Card, CardContent, CardHeader, Typography } from '@mui/material';
// import { Alert, AlertTitle } from '@mui/material';

// const TravelSearchApp = () => {
//   const [searchType, setSearchType] = useState('flights');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [results, setResults] = useState([]);

//   const [flightSearch, setFlightSearch] = useState({
//     fromId: '',
//     toId: '',
//     departDate: '', // Added departDate field
//     adults: 1,
//     children: 0,
//     cabinClass: 'ECONOMY'
//   });

//   const [hotelSearch, setHotelSearch] = useState({
//     destination: '',
//     checkIn: '',
//     checkOut: '',
//     adults: 1,
//     children: 0,
//     rooms: 1
//   });

//   const searchFlights = async () => {
//     if (!flightSearch.departDate) {
//       setError('Please select a departure date');
//       return;
//     }

//     setLoading(true);
//     setError('');
//     try {
//       const response = await fetch(
//         `https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights?` +
//         `fromId=${flightSearch.fromId}.AIRPORT` +
//         `&toId=${flightSearch.toId}.AIRPORT` +
//         `&departDate=${flightSearch.departDate}` + // Added departDate parameter
//         `&pageNo=1` +
//         `&adults=${flightSearch.adults}` +
//         `&children=${flightSearch.children}` +
//         `&sort=BEST` +
//         `&cabinClass=${flightSearch.cabinClass}` +
//         `&currency_code=AED`,
//         {
//           headers: {
//             'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
//             'x-rapidapi-key': '0ea7eb1741msh4b6b034aea1c498p16ab8djsnc2e94180977e'
//           }
//         }
//       );
//       const data = await response.json();
//       if (data.status === false) {
//         setError(Array.isArray(data.message) ? data.message[0]?.departDate || 'Search failed' : 'Search failed');
//         return;
//       }
//       setResults(data.data?.data || []);
//     } catch (err) {
//       setError('Failed to fetch flights. Please try again.');
//     }
//     setLoading(false);
//   };

//   const searchHotels = async () => {
//     // Hotel search implementation remains the same
//     // ... existing hotel search code ...
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="mb-8 text-center">
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">Travel Search</h1>
//           <p className="text-gray-600">Find the best flights and hotels for your next adventure</p>
//         </div>

//         <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
//           <div className="flex gap-4 mb-6">
//             <button
//               onClick={() => setSearchType('flights')}
//               className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 ${
//                 searchType === 'flights' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
//               }`}
//             >
//               <Plane className="w-5 h-5" />
//               Flights
//             </button>
//             <button
//               onClick={() => setSearchType('hotels')}
//               className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 ${
//                 searchType === 'hotels' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
//               }`}
//             >
//               <Building2 className="w-5 h-5" />
//               Hotels
//             </button>
//           </div>

//           {searchType === 'flights' ? (
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//               <input
//                 type="text"
//                 placeholder="From (Airport Code)"
//                 value={flightSearch.fromId}
//                 onChange={(e) => setFlightSearch({...flightSearch, fromId: e.target.value})}
//                 className="p-3 border rounded-lg"
//               />
//               <input
//                 type="text"
//                 placeholder="To (Airport Code)"
//                 value={flightSearch.toId}
//                 onChange={(e) => setFlightSearch({...flightSearch, toId: e.target.value})}
//                 className="p-3 border rounded-lg"
//               />
//               <input
//                 type="date"
//                 placeholder="Departure Date"
//                 value={flightSearch.departDate}
//                 onChange={(e) => setFlightSearch({...flightSearch, departDate: e.target.value})}
//                 className="p-3 border rounded-lg"
//               />
//               <select
//                 value={flightSearch.cabinClass}
//                 onChange={(e) => setFlightSearch({...flightSearch, cabinClass: e.target.value})}
//                 className="p-3 border rounded-lg"
//               >
//                 <option value="ECONOMY">Economy</option>
//                 <option value="BUSINESS">Business</option>
//                 <option value="FIRST">First Class</option>
//               </select>
//             </div>
//           ) : (
//          <p>No details</p>
//           )}

//           <div className="flex justify-center">
//             <button
//               onClick={searchType === 'flights' ? searchFlights : searchHotels}
//               disabled={loading}
//               className="bg-blue-600 text-white py-3 px-8 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
//             >
//               {loading ? (
//                 <Loader2 className="w-5 h-5 animate-spin" />
//               ) : (
//                 <>
//                   <Search className="w-5 h-5" />
//                   Search {searchType === 'flights' ? 'Flights' : 'Hotels'}
//                 </>
//               )}
//             </button>
//           </div>
//         </div>

//         {error && (
//           <Alert severity="error" className="mb-6">
//             <AlertTitle>{error}</AlertTitle>
//           </Alert>
//         )}

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {results.map((result, index) => (
//             <Card key={index} className="hover:shadow-xl transition-shadow">
//               <CardHeader>
//                 <Typography variant="h6">
//                   {searchType === 'flights' ? (
//                     <div className="flex items-center gap-2">
//                       <span>{result.departure}</span>
//                       <ArrowRight className="w-4 h-4" />
//                       <span>{result.arrival}</span>
//                     </div>
//                   ) : (
//                     result.name
//                   )}
//                 </Typography>
//               </CardHeader>
//               <CardContent>
//                 {searchType === 'flights' ? (
//                   <div className="space-y-2">
//                     <p className="text-gray-600">Duration: {result.duration}</p>
//                     <p className="text-gray-600">Airline: {result.airline}</p>
//                     <p className="font-bold text-lg">Price: {result.price}</p>
//                   </div>
//                 ) : (
//                   <div className="space-y-2">
//                     <p className="text-gray-600">{result.location}</p>
//                     <p className="text-gray-600">Rating: {result.rating}/10</p>
//                     <p className="font-bold text-lg">Price: {result.price}</p>
//                   </div>
//                 )}
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TravelSearchApp;
import React, { useState, useEffect } from 'react';
// import React, { useState } from 'react';
import { Search, Plane, Building2, Loader2, ArrowRight,Clock  } from 'lucide-react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { Alert, AlertTitle } from '@mui/material';

const TravelSearchApp = () => {
  const [searchType, setSearchType] = useState('flights');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState([]);
  const [aggregations, setAggregations] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    stops: 'all',
    airline: 'all',
    departureTime: 'all'
  });
  const [flightSearch, setFlightSearch] = useState({
    fromId: '',
    toId: '',
    departDate: '',
    adults: 1,
    children: 0,
    cabinClass: 'ECONOMY',
    sortType: 'BEST',
    currencyCode: 'USD'
  });
  const [destinations, setDestinations] = useState([]);
  const [isSearchingDestinations, setIsSearchingDestinations] = useState(false);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    fetchCurrencies();
  }, []);

  const fetchCurrencies = async () => {
    try {
      const response = await fetch('https://booking-com15.p.rapidapi.com/api/v1/meta/getCurrency', {
        headers: {
          'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
          'x-rapidapi-key': '0ea7eb1741msh4b6b034aea1c498p16ab8djsnc2e94180977e'
        }
      });
      const data = await response.json();
      if (data.data) {
        setCurrencies(data.data);
      }
    } catch (err) {
      console.error('Failed to fetch currencies:', err);
    }
  };
  const searchDestinations = async (query, type) => {
    if (query.length < 2) {
      setDestinations([]);
      return;
    }

    setIsSearchingDestinations(true);
    try {
      const response = await fetch(
        `https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination?query=${encodeURIComponent(query)}`,
        {
          headers: {
            'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
            'x-rapidapi-key': '0ea7eb1741msh4b6b034aea1c498p16ab8djsnc2e94180977e'
          }
        }
      );
      const data = await response.json();
      if (data.data) {
        setDestinations(data.data);
      }
    } catch (err) {
      console.error('Failed to fetch destinations:', err);
    }
    setIsSearchingDestinations(false);
  };
  const handleDestinationSelect = (destination, type) => {
    if (type === 'from') {
      setFlightSearch({
        ...flightSearch,
        fromId: destination.id,
        fromQuery: `${destination.name} (${destination.id})`
      });
      setShowFromDropdown(false);
    } else {
      setFlightSearch({
        ...flightSearch,
        toId: destination.id,
        toQuery: `${destination.name} (${destination.id})`
      });
      setShowToDropdown(false);
    }
  };
  const searchFlights = async () => {
    if (!flightSearch.fromId || !flightSearch.toId || !flightSearch.departDate) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);
    setError('');
    try {
        const response = await fetch(
          `https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights?` +
          `fromId=${flightSearch.fromId}.AIRPORT` +
          `&toId=${flightSearch.toId}.AIRPORT` +
          `&departDate=${flightSearch.departDate}` +
          `&pageNo=1` +
          `&adults=${flightSearch.adults}` +
          `&children=${flightSearch.children}` +
          `&sort=BEST` +
          `&cabinClass=${flightSearch.cabinClass}` +
          `&currency_code=${flightSearch.currencyCode}`,
          // `&currency_code=AED`,
          {
            headers: {
              'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
              'x-rapidapi-key': '0ea7eb1741msh4b6b034aea1c498p16ab8djsnc2e94180977e'
            }
          }
        );

    const data = await response.json();
      
      if (data.status && data.data) {
        if (data.data.aggregation) {
          setAggregations(data.data.aggregation);
        }
        
        if (data.data.flightOffers && data.data.flightOffers.length > 0) {
          const processedResults = data.data.flightOffers.map(offer => ({
            id: offer.token,
            departure: offer.segments[0].departureAirport.code,
            arrival: offer.segments[0].arrivalAirport.code,
            departureTime: new Date(offer.segments[0].departureTime).toLocaleTimeString(),
            arrivalTime: new Date(offer.segments[0].arrivalTime).toLocaleTimeString(),
            duration: Math.round(offer.segments[0].totalTime / 3600), // Convert seconds to hours
            stops: offer.segments[0].legs.length - 1,
            airline: offer.segments[0].legs[0].carriersData[0].name,
            price: `${offer.priceBreakdown.total.currencyCode} ${offer.priceBreakdown.total.units}.${Math.round(offer.priceBreakdown.total.nanos/10000000)}`,
            cabinClass: offer.segments[0].legs[0].cabinClass,
            aircraft: offer.segments[0].legs[0].flightInfo.planeType,
            baggageInfo: 'Included'
          }));
          setResults(processedResults);
        } else {
          setError('No flights found for the selected criteria');
        }
      } else if (data.data?.error) {
        setError(`Search failed: ${data.data.error.code}`);
      } else {
        setError('No flights found for the selected criteria');
      }
    } catch (err) {
      console.error('API Error:', err);
      setError('Failed to fetch flights. Please try again.');
    }
    setLoading(false);
  };
  const DestinationSearchInput = ({ type, value, onChange, onFocus, show }) => (
    <div className="relative w-full">
      <input
        type="text"
        placeholder={`${type === 'from' ? 'From' : 'To'} (City or Airport)`}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          searchDestinations(e.target.value, type);
        }}
        onFocus={() => onFocus(true)}
        className="p-3 border rounded-lg w-full"
      />
      {show && destinations.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleDestinationSelect(dest, type)}
            >
              <div className="font-medium">{dest.name}</div>
              <div className="text-sm text-gray-600">{dest.id}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const ResultsTable = ({ results }) => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-4 text-left border-b font-semibold text-gray-600">Airline</th>
            <th className="p-4 text-left border-b font-semibold text-gray-600">Route</th>
            <th className="p-4 text-left border-b font-semibold text-gray-600">Schedule</th>
            <th className="p-4 text-left border-b font-semibold text-gray-600">Duration</th>
            <th className="p-4 text-left border-b font-semibold text-gray-600">Stops</th>
            <th className="p-4 text-left border-b font-semibold text-gray-600">Details</th>
            <th className="p-4 text-left border-b font-semibold text-gray-600">Price</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <Plane className="w-4 h-4 text-blue-500" />
                  <span>{result.airline}</span>
                </div>
              </td>
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{result.departure}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <span className="font-medium">{result.arrival}</span>
                </div>
              </td>
              <td className="p-4">
                <div className="flex flex-col">
                  <span className="text-sm">Dep: {result.departureTime}</span>
                  <span className="text-sm">Arr: {result.arrivalTime}</span>
                </div>
              </td>
              <td className="p-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>{result.duration}h</span>
                </div>
              </td>
              <td className="p-4">
                <span className={`px-2 py-1 rounded-full text-sm ${
                  result.stops === 0 
                    ? 'bg-green-100 text-green-800'
                    : result.stops === 1
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {result.stops} stop{result.stops !== 1 ? 's' : ''}
                </span>
              </td>
              <td className="p-4">
                <div className="flex flex-col text-sm">
                  <span className="text-gray-600">Class: {result.cabinClass}</span>
                  <span className="text-gray-600">Aircraft: {result.aircraft}</span>
                  <span className="text-gray-600">Baggage: {result.baggageInfo}</span>
                </div>
              </td>
              <td className="p-4">
                <div className="flex flex-col">
                  <span className="font-bold text-lg">{result.price}</span>
                  <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    Select
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Travel Search</h1>
          <p className="text-gray-600">Find the best flights for your next journey</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            {/* <Card>
              <CardHeader>
                <Typography>Search Filters</Typography>
              </CardHeader>
              <CardContent>
           
              </CardContent>
            </Card> */}
          </div>

          <div className="lg:col-span-3">
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <DestinationSearchInput
                    type="from"
                    value={flightSearch.fromQuery}
                    onChange={(value) => setFlightSearch({ ...flightSearch, fromQuery: value })}
                    onFocus={setShowFromDropdown}
                    show={showFromDropdown}
                  />
                  <DestinationSearchInput
                    type="to"
                    value={flightSearch.toQuery}
                    onChange={(value) => setFlightSearch({ ...flightSearch, toQuery: value })}
                    onFocus={setShowToDropdown}
                    show={showToDropdown}
                  />
                  {/* <input
                    type="text"
                    placeholder="From (Airport Code)"
                    value={flightSearch.fromId}
                    onChange={(e) => setFlightSearch({...flightSearch, fromId: e.target.value})}
                    className="p-3 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="To (Airport Code)"
                    value={flightSearch.toId}
                    onChange={(e) => setFlightSearch({...flightSearch, toId: e.target.value})}
                    className="p-3 border rounded-lg"
                  /> */}
                  <input
                    type="date"
                    value={flightSearch.departDate}
                    onChange={(e) => setFlightSearch({...flightSearch, departDate: e.target.value})}
                    className="p-3 border rounded-lg"
                  />
                  <select
                    value={flightSearch.cabinClass}
                    onChange={(e) => setFlightSearch({...flightSearch, cabinClass: e.target.value})}
                    className="p-3 border rounded-lg"
                  >
                    <option value="ECONOMY">Economy</option>
                    <option value="BUSINESS">Business</option>
                    <option value="FIRST">First Class</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <select
                    value={flightSearch.sortType}
                    onChange={(e) => setFlightSearch({...flightSearch, sortType: e.target.value})}
                    className="p-3 border rounded-lg"
                  >
                    <option value="BEST">Best</option>
                    <option value="CHEAPEST">Cheapest</option>
                    <option value="FASTEST">Fastest</option>
                  </select>

                  <select
                    value={flightSearch.currencyCode}
                    onChange={(e) => setFlightSearch({...flightSearch, currencyCode: e.target.value})}
                    className="p-3 border rounded-lg"
                  >
                    {currencies.map((currency) => (
                      <option key={currency.code} value={currency.code}>
                        {currency.code} - {currency.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={searchFlights}
                    disabled={loading}
                    className="bg-blue-600 text-white py-3 px-8 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors disabled:opacity-50"
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <Search className="w-5 h-5" />
                        Search Flights
                      </>
                    )}
                  </button>
                </div>
              </CardContent>
            </Card>

            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertTitle>{error}</AlertTitle>
              </Alert>
            )}

            <div className="grid grid-cols-1 gap-4">
            {results.length > 0 && (
        <Card className="mt-6">
          <CardHeader>
            <div className="flex justify-between items-center">
              <Typography variant="h6">Flight Results</Typography>
              <Typography variant="body2" className="text-gray-600">
                {results.length} flights found
              </Typography>
            </div>
          </CardHeader>
          <CardContent>
            <ResultsTable results={results} />
          </CardContent>
        </Card>
      )}
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelSearchApp;