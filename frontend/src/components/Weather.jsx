// import React, { useState } from 'react';


// const Weather = () => {
//     const [city, setCity] = useState('');
//     const [weatherData, setWeatherData] = useState(null);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(false); // Add loading state

//     const API_KEY = '27e15b0805a28f7ffa546b57b51f108c';

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true); // Set loading state to true
//         try {
//             const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//             if (!response.ok) {
//                 throw new Error('City not found');
//             }
//             const data = await response.json();
//             setWeatherData(data);
//             setError(null);
//         } catch (error) {
//             console.error(error);
//             setError(error.message);
//             setWeatherData(null);
//         } finally {
//             setLoading(false); // Set loading state to false
//         }
//     };

//     return (
//         <div className="weather-container">
//             <h2>Weather</h2>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city name" required />
//                 <button type="submit">Get Weather</button>
//             </form>
//             {loading && <p>Loading...</p>} {/* Display loading animation */}
//             {error && <p className="error-message">{error}</p>} {/* Add error message styling */}
//             {weatherData && (
//                 <div className="weather-info">
//                     <h3>Weather in {weatherData.name}</h3>
//                     <p>Temperature: {weatherData.main.temp} °C</p>
//                     <p>Humidity: {weatherData.main.humidity}%</p>
//                     <p>Weather: {weatherData.weather[0].main}</p>
//                     {/* Add weather icons based on weather conditions */}
//                     <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="Weather Icon" />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Weather;



// import React, { useState } from 'react';
// import './Weather.css'; // Import CSS file for Weather component styling

// const Weather = () => {
//     const [city, setCity] = useState('');
//     const [weatherData, setWeatherData] = useState(null);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const API_KEY = '27e15b0805a28f7ffa546b57b51f108c';

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//             if (!response.ok) {
//                 throw new Error('City not found');
//             }
//             const data = await response.json();
//             setWeatherData(data);
//             setError(null);
//         } catch (error) {
//             console.error(error);
//             setError(error.message);
//             setWeatherData(null);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="weather-container">
//             <div className="left-section">
//                 <div className="curve-image"></div>
//             </div>
//             <div className="right-section">
//                 <h2>Weather</h2>
//                 <form onSubmit={handleSubmit} className="weather-form">
//                     <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city name" required />
//                     <button type="submit">Get Weather</button>
//                 </form>
//                 {loading && <p>Loading...</p>}
//                 {error && <p className="error-message">{error}</p>}
//                 {weatherData && (
//                     <div className="weather-info">
//                         <h3>Weather in {weatherData.name}</h3>
//                         <p>Temperature: {weatherData.main.temp} °C</p>
//                         <p>Humidity: {weatherData.main.humidity}%</p>
//                         <p>Weather: {weatherData.weather[0].main}</p>
//                         {/* <img src="/weather.jpeg" alt="Weather Icon" /> */}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Weather;
import React, { useState, useEffect } from 'react';
import './Weather.css'; // Import CSS file for Weather component styling

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState('/default.jpg'); // Default background image

    const API_KEY = '27e15b0805a28f7ffa546b57b51f108c';

    useEffect(() => {
        // Fetch background image based on weather condition
        if (weatherData && weatherData.weather && weatherData.weather.length > 0) {
            const weatherCondition = weatherData.weather[0].main.toLowerCase();
            const background = getBackgroundImage(weatherCondition);
            setBackgroundImage(background);
        }
    }, [weatherData]);

    const getBackgroundImage = (weatherCondition) => {
        // Map weather conditions to background images
        switch (weatherCondition) {
            case 'clear':
                return '/clear.jpeg';
            case 'clouds':
                return '/clouds.jpeg';
            case 'rain':
                return '/rain.jpeg';
            case 'hazy':
                return '/hazy.jpeg';
            // Add more cases for different weather conditions
            default:
                return '/default1.jpeg';
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
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
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="weather-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="overlay"></div>
            <div className="left-section">
                <div className="curve-image"></div>
            </div>
            <div className="right-section">
                <h2>Weather</h2>
                <form onSubmit={handleSubmit} className="weather-form">
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city name" required />
                    <button type="submit">Get Weather</button>
                </form>
                {loading && <p>Loading...</p>}
                {error && <p className="error-message">{error}</p>}
                {weatherData && (
                    <div className="weather-info">
                        <h3>Weather in {weatherData.name}</h3>
                        <p>Temperature: {weatherData.main.temp} °C</p>
                        <p>Humidity: {weatherData.main.humidity}%</p>
                        <p>Weather: {weatherData.weather[0].main}</p>
                        {/* <img src="/weather.jpeg" alt="Weather Icon" /> */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Weather;
