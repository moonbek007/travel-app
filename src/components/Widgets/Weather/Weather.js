import React, { useState, useEffect } from "react";
import s from "./weather.module.css";
import iconLoading from "../../../assets/loading.svg";

// temporary values
  const API_KEY = '547d7b79d0be1ee3511f3e1786973061';
  const lat = 55.74496745165178; 
  const lon = 37.59966285843172; 
// ================

const Weather = () => {

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeather();
    const intervalId = setInterval(getWeather, 300000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line 
  }, []);

  const getWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`
        +`&units=metric&appid=${API_KEY}`// process.env.REACT_APP_WEATHER_API_KEY
    );
    const data = await response.json();
    if (data.cod >= 400 || !data) {
      alert('failed to load weather');
      setWeather(weather ? weather : null);
    } else {
      setWeather({
        temperature: Math.round(data.main.temp),
        description: data.weather[0].description,
        iconSrc: (`https://openweathermap.org/img/wn/`
          +`${data.weather[0].icon}@4x.png`),
      });
    }
  }

  return (
    <div className={s.wrapper}>
      {
        !weather 
        ? <img className={s.loading} src={iconLoading} alt='loading' />
        :
        <>
          <img 
            className={s.weather_icon} 
            src={weather.iconSrc} 
            alt='weather-icon'
          />
          <span className={s.temperature}>{weather.temperature}°C</span>
          <span className={s.description}>{weather.description}</span>
        </>
      }
    </div>
  );
};

export default Weather;
