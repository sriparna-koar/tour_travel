

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Plane, 
  ArrowRight, 
  Clock,
  User,
  Baby,
  Gauge,
  Wallet,
  Calendar,
  SlidersHorizontal,
  Globe,
  ChevronDown,
  X,
  Filter,
  Star,
  Luggage,
  PlaneLanding,
  PlaneTakeoff
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  Typography,
  Alert,
  AlertTitle,
  CircularProgress,
  Chip,
  Tooltip,
  Tabs,
  Tab,
  Badge
} from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import { debounce } from 'lodash';
// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '16px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 35px rgba(0,0,0,0.15)'
  }
}));

const StyledButton = styled('button')(({ theme }) => ({
  background: 'linear-gradient(135deg, #3f51b5 0%, #2196f3 100%)',
  color: 'white',
  padding: '12px 24px',
  borderRadius: '12px',
  border: 'none',
  fontWeight: '600',
  fontSize: '16px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 5px 15px rgba(33, 150, 243, 0.4)'
  },
  '&:disabled': {
    opacity: 0.7,
    cursor: 'not-allowed'
  }
}));

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
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

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
    // if (query.length < 2) {
    //   setDestinations([]);
    //   return;
    // }
  if (!query) {
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

  const swapLocations = () => {
    setFlightSearch({
      ...flightSearch,
      fromId: flightSearch.toId,
      toId: flightSearch.fromId,
      fromQuery: flightSearch.toQuery,
      toQuery: flightSearch.fromQuery
    });
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
            departure: offer.segments[0].departureAirport?.code || 'N/A',
            arrival: offer.segments[0].arrivalAirport?.code || 'N/A',
            departureTime: offer.segments[0].departureTime ? new Date(offer.segments[0].departureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'N/A',
            arrivalTime: offer.segments[0].arrivalTime ? new Date(offer.segments[0].arrivalTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'N/A',
            duration: offer.segments[0].totalTime ? Math.round(offer.segments[0].totalTime / 60) : 'N/A', // Convert to minutes
            stops: offer.segments[0].legs ? offer.segments[0].legs.length - 1 : 0,
            airline: offer.segments[0].legs?.[0]?.carriersData?.[0]?.name || 'Unknown',
            price: offer.priceBreakdown?.total ? `${offer.priceBreakdown.total.currencyCode} ${offer.priceBreakdown.total.units}.${Math.round(offer.priceBreakdown.total.nanos/10000000)}` : 'Price not available',
            cabinClass: offer.segments[0].legs?.[0]?.cabinClass || 'Unknown',
            aircraft: offer.segments[0].legs?.[0]?.flightInfo?.planeType || 'Unknown',
            baggageInfo: offer.segments[0].legs?.[0]?.baggageInfo || 'Included',
            rating: Math.random() * 2 + 3 // Random rating between 3-5 for demo
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
      <div className="flex items-center gap-2">
        {type === 'from' ? (
          <PlaneTakeoff className="w-5 h-5 text-blue-500" />
        ) : (
          <PlaneLanding className="w-5 h-5 text-blue-500" />
        )}
        <input
          type="text"
          placeholder={type === 'from' ? 'Departure city or airport' : 'Destination city or airport'}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            searchDestinations(e.target.value, type);
          }}
          onFocus={() => onFocus(true)}
          onBlur={() => setTimeout(() => onFocus(false), 200)}
          className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      {show && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-xl max-h-60 overflow-y-auto"
        >
          {isSearchingDestinations ? (
            <div className="p-4 flex justify-center">
              <CircularProgress size={20} />
            </div>
          ) : destinations.length > 0 ? (
            destinations.map((dest) => (
              <div
                key={dest.id}
                className="p-3 hover:bg-blue-50 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0"
                onClick={() => handleDestinationSelect(dest, type)}
              >
                <div className="font-medium flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  {dest.name}
                </div>
                <div className="text-sm text-gray-500 ml-6">{dest.id}</div>
              </div>
            ))
          ) : (
            <div className="p-3 text-gray-500">No destinations found</div>
          )}
        </motion.div>
      )}
    </div>
  );

  const FlightCard = ({ flight }) => (
    <StyledCard className="mb-4">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Airline & Rating */}
          <div className="md:col-span-2 flex flex-col items-center">
            <div className="bg-blue-100 p-3 rounded-full mb-2">
              <Plane className="w-6 h-6 text-blue-600" />
            </div>
            <span className="font-medium text-center">{flight.airline}</span>
            <div className="flex items-center mt-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < Math.floor(flight.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
          </div>
          
          {/* Schedule */}
          <div className="md:col-span-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold">{flight.departureTime}</div>
                <div className="text-gray-600">{flight.departure}</div>
              </div>
              
              <div className="flex-1 px-4">
                <div className="relative">
                  <div className="h-px bg-gray-300 w-full"></div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="flex items-center bg-white px-2 py-1 rounded-full border border-gray-200 shadow-sm">
                      <Clock className="w-4 h-4 text-blue-500 mr-1" />
                      <span className="text-xs font-medium">{flight.duration} min</span>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-1">
                  <Chip 
                    label={`${flight.stops} stop${flight.stops !== 1 ? 's' : ''}`} 
                    size="small" 
                    color={flight.stops === 0 ? 'success' : flight.stops === 1 ? 'warning' : 'error'}
                  />
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold">{flight.arrivalTime}</div>
                <div className="text-gray-600">{flight.arrival}</div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              <div className="bg-gray-50 p-2 rounded-lg">
                <div className="font-medium">Class</div>
                <div className="text-gray-600">{flight.cabinClass}</div>
              </div>
              <div className="bg-gray-50 p-2 rounded-lg">
                <div className="font-medium">Aircraft</div>
                <div className="text-gray-600">{flight.aircraft}</div>
              </div>
              <div className="bg-gray-50 p-2 rounded-lg">
                <div className="font-medium">Baggage</div>
                <div className="text-gray-600 flex items-center justify-center">
                  <Luggage className="w-4 h-4 mr-1" />
                  {flight.baggageInfo}
                </div>
              </div>
            </div>
          </div>
          
          {/* Price & Action */}
          <div className="md:col-span-4 flex flex-col items-center justify-center border-l border-gray-200 pl-4">
            <div className="text-xl font-semibold text-blue-600 mb-2">
              {flight.price}
            </div>
            {/* <StyledButton className="w-full justify-center">
              Book Now
            </StyledButton>
            <button className="mt-2 text-blue-600 text-sm font-medium hover:underline">
              View Details
            </button> */}
          </div>
        </div>
      </CardContent>
    </StyledCard>
  );

  const FilterPanel = () => (
    <motion.div 
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="overflow-hidden"
    >
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5" />
                Stops
              </h3>
              <div className="space-y-2">
                {['All', 'Non-stop', '1 Stop', '2+ Stops'].map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      type="radio"
                      id={`stops-${option}`}
                      name="stops"
                      checked={selectedFilters.stops === option.toLowerCase().replace('+', '').replace(' ', '')}
                      onChange={() => setSelectedFilters({...selectedFilters, stops: option.toLowerCase().replace('+', '').replace(' ', '')})}
                      className="mr-2"
                    />
                    <label htmlFor={`stops-${option}`}>{option}</label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <Gauge className="w-5 h-5" />
                Departure Time
              </h3>
              <div className="space-y-2">
                {['All', 'Morning (6am-12pm)', 'Afternoon (12pm-6pm)', 'Evening (6pm-12am)', 'Night (12am-6am)'].map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      type="radio"
                      id={`time-${option}`}
                      name="time"
                      checked={selectedFilters.departureTime === option.split(' ')[0].toLowerCase()}
                      onChange={() => setSelectedFilters({...selectedFilters, departureTime: option.split(' ')[0].toLowerCase()})}
                      className="mr-2"
                    />
                    <label htmlFor={`time-${option}`}>{option}</label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <Wallet className="w-5 h-5" />
                Price Range
              </h3>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  className="w-full"
                />
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>$0</span>
                <span>$5000</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              SkySearch
            </span>
          </h1>
          <p className="text-gray-600">Find the perfect flight for your next adventure</p>
        </motion.div>

        <Tabs 
          value={activeTab} 
          onChange={(e, newValue) => setActiveTab(newValue)}
          indicatorColor="primary"
          textColor="primary"
          centered
          className="mb-6"
        >
          {/* <Tab label="Round Trip" icon={<Plane className="w-5 h-5" />} /> */}
          <Tab label="One Way" icon={<ArrowRight className="w-5 h-5" />} />
          {/* <Tab label="Multi-City" icon={<Globe className="w-5 h-5" />} /> */}
        </Tabs>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <StyledCard>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="space-y-4">
                  <DestinationSearchInput
                    type="from"
                    value={flightSearch.fromQuery || ''}
                    onChange={(value) => setFlightSearch({ ...flightSearch, fromQuery: value })}
                    onFocus={setShowFromDropdown}
                    show={showFromDropdown}
                  />
                  
                  <div className="flex justify-center">
                    <button 
                      onClick={swapLocations}
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <ArrowRight className="w-5 h-5 text-gray-600 rotate-90" />
                    </button>
                  </div>
                  
                  <DestinationSearchInput
                    type="to"
                    value={flightSearch.toQuery || ''}
                    onChange={(value) => setFlightSearch({ ...flightSearch, toQuery: value })}
                    onFocus={setShowToDropdown}
                    show={showToDropdown}
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Departure
                    </label>
                    <input
                      type="date"
                      value={flightSearch.departDate}
                      onChange={(e) => setFlightSearch({...flightSearch, departDate: e.target.value})}
                      className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  {activeTab === 0 && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Return
                      </label>
                      <input
                        type="date"
                        className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  )}
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Passengers
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <select
                        value={flightSearch.adults}
                        onChange={(e) => setFlightSearch({...flightSearch, adults: parseInt(e.target.value)})}
                        className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        {[1, 2, 3, 4, 5, 6].map(num => (
                          <option key={`adult-${num}`} value={num}>{num} Adult{num !== 1 ? 's' : ''}</option>
                        ))}
                      </select>
                      <select
                        value={flightSearch.children}
                        onChange={(e) => setFlightSearch({...flightSearch, children: parseInt(e.target.value)})}
                        className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        {[0, 1, 2, 3, 4].map(num => (
                          <option key={`child-${num}`} value={num}>
                            <div className="flex items-center">
                              {num} Child{num !== 1 ? 'ren' : ''}
                              {num > 0 && <Baby className="w-4 h-4 ml-1" />}
                            </div>
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <select
                      value={flightSearch.cabinClass}
                      onChange={(e) => setFlightSearch({...flightSearch, cabinClass: e.target.value})}
                      className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="ECONOMY">Economy</option>
                      <option value="PREMIUM_ECONOMY">Premium Economy</option>
                      <option value="BUSINESS">Business</option>
                      <option value="FIRST">First Class</option>
                    </select>
                    
                    <select
                      value={flightSearch.currencyCode}
                      onChange={(e) => setFlightSearch({...flightSearch, currencyCode: e.target.value})}
                      className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {currencies.map((currency) => (
                        <option key={currency.code} value={currency.code}>
                          {currency.code} - {currency.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 text-blue-600 font-medium"
                >
                  <Filter className="w-5 h-5" />
                  Filters
                  {showFilters && (
                    <Badge badgeContent={3} color="primary" className="ml-1" />
                  )}
                </button>
                
                <StyledButton
                  onClick={searchFlights}
                  disabled={loading}
                >
                  {loading ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : (
                    <>
                      <Search className="w-5 h-5" />
                      Search Flights
                    </>
                  )}
                </StyledButton>
              </div>
            </CardContent>
          </StyledCard>
        </motion.div>

        {showFilters && <FilterPanel />}

        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Alert severity="error" className="mb-6 rounded-lg">
              <AlertTitle>Error</AlertTitle>
              {error}
            </Alert>
          </motion.div>
        )}

        {loading && results.length === 0 ? (
          <div className="flex justify-center items-center h-64">
            <CircularProgress size={60} />
          </div>
        ) : results.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {results.length} Flights Found
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Sort by:</span>
                <select 
                  value={flightSearch.sortType}
                  onChange={(e) => setFlightSearch({...flightSearch, sortType: e.target.value})}
                  className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="BEST">Best</option>
                  <option value="PRICE">Price</option>
                  <option value="DURATION">Duration</option>
                  <option value="DEPARTURE">Departure Time</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-4">
              {results.map((flight, index) => (
                <FlightCard key={`${flight.id}-${index}`} flight={flight} />
              ))}
            </div>
          </motion.div>
        ) : (
          !loading && !error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <Plane className="w-16 h-16 text-gray-300 mb-4" />
              <h3 className="text-xl font-medium text-gray-600 mb-2">
                Ready to explore?
              </h3>
              <p className="text-gray-500 max-w-md">
                Enter your departure and destination cities, select your travel dates, and find the best flight options for your journey.
              </p>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export default TravelSearchApp;