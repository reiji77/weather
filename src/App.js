import logo from './logo.svg';
import { useState } from "react";
import './App.css';

function App() {
  const [userLocation, setLocation] = useState(null)

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const {latitude, longitude} = position.coords
          setLocation({latitude, longitude})
        },
        (error) => {
          console.error("Couldn't get location", error)
        }
      )
    } else {
      console.error("Browser does not support location")
    }
  }

  function getWeather({longitude, latitude}) {
    const weather = fetch("https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}")
  }

  return (
    <div className="App">
      <header className="App-header">
        geolocation app
        <button onClick={getLocation}>Allow Location?</button>
        {userLocation && (
          <div>
            <h2>User Location</h2>
            <p>Lat: {userLocation.latitude}</p>
            <p>Lon: {userLocation.longitude}</p>
          </div>
        )

        }
      </header>
    </div>
  );
}

export default App;

