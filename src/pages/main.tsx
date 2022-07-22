import axios from "axios";
import React, { useState } from "react";
import Weather from "../component/weather";
import Home from "./Home";
const APIkey = "ec58505f4e2ed5b395a8213bb8bb7726";
const Main: React.FC = () => {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async () => {
    const fghj = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`
      )
      .then((res) => {
        return res.data;
      });
    updateWeather(fghj);
  };
  return (
    <>
      {weather ? (
        <Weather weather={weather} />
      ) : (
        <Home fetchWeather={fetchWeather} updateCity={updateCity} />
      )}
{/* <Home fetchWeather={fetchWeather} updateCity={updateCity} /> */}

    </>
  );
};
export default Main;
