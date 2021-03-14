import React, { useState, useEffect } from "react";
import s from "./date.module.css";
import TravelAppContext from "../../context/context";
const Dat = () => {
  const { language, utc, area, cityTime, lang } = React.useContext(
    TravelAppContext
  );

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: `${area}/${cityTime}`,
  };

  const [time, setTime] = useState(
    new Date().toLocaleTimeString(lang, options)
  );

  useEffect(() => {
    const intervalFunction = () => {
      setTime(new Date().toLocaleTimeString(`${lang}`, options));
    };
    const interval = setInterval(intervalFunction, 1000);
    return () => clearInterval(interval);
  }, [language]);

  return (
    <div className={s.wrapper}>
      <span>{time}</span>
    </div>
  );
};
export default Dat;
