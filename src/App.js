import React, { useState, useEffect } from 'react';
import './App.css';
import WeatherInfo from './components/WeatherInfo';
import LocationButton from './components/LocationButton';
import image from './resources/girl.jpg';
function App() {
  const [userLocation, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setButtonClicked(true);
        },
        (error) => {
          console.error("Couldn't get location", error);
        }
      );
    } else {
      console.error("Browser does not support location");
    }
  }

  async function getWeather({ longitude, latitude }) {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
    const weatherData = await response.json();
    setWeather(weatherData);
  }

  useEffect(() => {
    if (userLocation) {
      getWeather(userLocation);
    }
  }, [userLocation]);

  return (
    <div className="App">
      <header className="App-header">
        <p className='header-text'>MeowMeow Weather</p>
        <img src={image} alt="Girl" className='girl-image' />
        
        {!buttonClicked && <LocationButton getLocation={getLocation} />}
        {weather && <WeatherInfo weather={weather} />}
      </header>
      
    </div>
  );
}

export default App;

