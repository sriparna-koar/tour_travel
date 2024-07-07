import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import './Weather.css';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState('/default.jpg');
    const [history, setHistory] = useState([]);
    const [model, setModel] = useState(null);

    useEffect(() => {
        const genAI = new GoogleGenerativeAI(`AIzaSyBcdbgAmnXjKbRrhAKJLZB7wHR3KPm7suY`);
        const getModel = async () => {
            const genModel = await genAI.getGenerativeModel({ model: "gemini-pro" });
            setModel(genModel);
        };
        getModel();
    }, []);

    useEffect(() => {
        if (weatherData && weatherData.weather && weatherData.weather.length > 0) {
            const weatherCondition = weatherData.weather[0].main.toLowerCase();
            const background = getBackgroundImage(weatherCondition);
            setBackgroundImage(background);
        }
    }, [weatherData]);

    const getBackgroundImage = (weatherCondition) => {
        switch (weatherCondition) {
            case 'clear':
                return '/clear.jpeg';
            case 'clouds':
                return '/clouds.jpeg';
            case 'rain':
                return '/rain.jpeg';
            case 'hazy':
                return '/hazy.jpeg';
            default:
                return '/default1.jpeg';
        }
    };

    const handleSubmitWeather = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const apiKey = '27e15b0805a28f7ffa546b57b51f108c';
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
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

    const handleSubmitChat = async (e) => {
        e.preventDefault();
        const prompt = e.target.elements.prompt.value.trim();
        if (!prompt) return;

        const newUserRole = {
            role: "user",
            parts: prompt,
        };
        setHistory([...history, newUserRole, { role: "loading", parts: "Loading..." }]);

        try {
            const chat = await model.startChat({ history: [] }); // Start with an empty history
            const result = await chat.sendMessage(prompt);
            const response = await result.response;
            const text = await response.text();
            const newAIRole = {
                role: "model",
                parts: text,
            };

            setHistory((prevHistory) => {
                const updatedHistory = [...prevHistory];
                updatedHistory[updatedHistory.length - 1] = newAIRole; // Replace the loading message with the actual response
                return updatedHistory;
            });
        } catch (error) {
            console.error(error);
            setHistory((prevHistory) => prevHistory.filter((item) => item.role !== "loading"));
        }

        e.target.elements.prompt.value = '';
    };

    return (
        <div className="main-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="weather-container">
                <h2>Weather</h2>
                <form onSubmit={handleSubmitWeather} className="weather-form">
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
                    </div>
                )}
            </div>
            <div className="chatbot-container">
                <h2>Chatbot</h2>
                <div className="chat-container">
                    {history.map((item, index) => (
                        <div key={index} className={`chat-message ${item.role}`}>
                            <p>
                                {item.role === "user" && <span className="icon">🧑</span>}
                                {item.role === "model" && <span className="icon">🤖</span>}
                                {typeof item.parts === 'string' ? item.parts : item.parts.text}
                            </p>
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmitChat} className="chat-form">
                    <textarea name="prompt" id="prompt" cols="30" rows="2" placeholder="Enter message here..." required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Weather;
