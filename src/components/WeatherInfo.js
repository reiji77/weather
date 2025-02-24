import React from 'react';

const WeatherInfo = ({ weather }) => {
  return (
    <div className="weather-info">
      <h2>Weather Information</h2>
      <p>Temperature: {weather.main.temp}°K</p>
      <p>Weather: {weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherInfo;