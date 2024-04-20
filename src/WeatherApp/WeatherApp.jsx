import { useState } from "react";
import InfoBox from "../InfoBox/InfoBox";
import SearchBox from "../SearchBox/SearchBox";
import "./WeatherApp.css";

export default function WeatherApp() {
  let [WeatherInfo, setWeatherInfo] = useState({
    city: "Rajkot",
    country: "AE",
    feelslike: 27.6,
    humidity: 42,
    temp: 27.77,
    weather: "clear sky",
  });

  let UpdateInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <div className="weatherapp">
      <h1>Weather App</h1>
      <SearchBox UpdateInfo={UpdateInfo} />
      <InfoBox info={WeatherInfo} />
    </div>
  );
}
