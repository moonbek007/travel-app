import React from "react";
import s from "./weather.module.css";

// const API_KEY = '547d7b79d0be1ee3511f3e1786973061';
// https://api.openweathermap.org/data/2.5/weather?q=Kiev,UA&units=metric&appid=${API_KEY}

const Weather = () => {

  const temperature = '28';
  const description = 'lite rain';
  const src = "https://openweathermap.org/img/wn/02n.png";

  return (
    <div>
      <div className={s.wrapper}>
        <img src={src} alt='weather-icon' />
        <span className={s.temperature}>{temperature}°C</span>
        <span className={s.description}>{description}</span>
      </div>
    </div>
  );
};

export default Weather;
