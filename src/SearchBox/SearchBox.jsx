import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ UpdateInfo }) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "811ad9983d5fd72ffafc7a11d0285f54";
  let [city, setCity] = useState("");
  let [error, setError] = useState(null);

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      //    console.log(jsonResponse);

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        humidity: jsonResponse.main.humidity,
        feelslike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
        country: jsonResponse.sys.country,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };
  let handelChange = (e) => {
    setCity(e.target.value);
  };
  let handleSubmit = async (eve) => {
    try {
      eve.preventDefault();
      console.log(city);
      setCity("");
      let newinfo = await getWeatherInfo();
      UpdateInfo(newinfo);
      setError(null);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="container">
      <form action="">
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handelChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Search
        </Button>

        {error && <p style={{ color: "red" }}>No such place exists!</p>}
      </form>
    </div>
  );
}
