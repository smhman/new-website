import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface WeatherData {
  weather: {
    description: string;
  }[];
  main: {
    temp: number;
  };
  name: string;
  sys: {
    country: string;
  };
}

const Weather: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const url = 'https://api.openweathermap.org/data/2.5/';
  const key = '739ef515e3ade2c79525a82f51f458a5'; // Replace with your API key
  const cityName = 'Tallinn';

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await axios.get<WeatherData>(
          `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`
        );
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather:', error);
        // Handle errors accordingly
        setLoading(false);
      }
    }

    fetchWeather();
  }, []); // Empty dependency array to run effect only once on component mount

  return (
    <p className="mb-4 text-base text-gray-300">
      {loading ? (
        <span id="weather">
          <i className="fa-regular fa-spinner-third animate-spin text-gray-500 inline-flex ml-1 mr-2"></i>
          Loading...
        </span>
      ) : weatherData ? (
        <span id="weather">
          <span className="text-capitalize">{weatherData.weather[0].description}</span> and{' '}
          {Math.round(weatherData.main.temp)}°C in{' '}
          <span className="coloredText">
            {weatherData.name}, {weatherData.sys.country}
          </span>
        </span>
      ) : (
        <span id="weather">Weather data not available</span>
      )}
    </p>
  );
};

export default Weather;
