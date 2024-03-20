
import React, { useState } from 'react';



const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
  
    const API_KEY = '27e15b0805a28f7ffa546b57b51f108c';
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
          throw new Error('City not found');
        }
        const data = await response.json();
        setWeatherData(data);
        setError(null);
      } catch (error) {
        console.error(error);
        setError(error.message);
        setWeatherData(null);
      }
    };
    
    return (
      <div>
        <h2>Weather</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city name" required />
          <button type="submit">Get Weather</button>
        </form>
        {error && <p>{error}</p>}
        {weatherData && (
          <div>
            <h3>Weather in {weatherData.name}</h3>
            <p>Temperature: {weatherData.main.temp} °C</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Weather: {weatherData.weather[0].main}</p>
          </div>
        )}
      </div>
    );
  };
  export default Weather;