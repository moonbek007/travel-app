import React from "react";
import s from "./date.module.css";

import { localTime } from "../../../services/api.service";
import TravelAppContext from "../../context/context";
import { findWeekDay, findMonth } from "../../handlers/dateFunctions";

const Date = () => {
  const { language, utc } = React.useContext(TravelAppContext);

  let weekDay = findWeekDay(localTime.getUTCDay(), language);
  let month = findMonth(localTime.getMonth(), language);
  let minutes = localTime.getMinutes();
  let hours = utc + localTime.getUTCHours();
  if (hours < 10 && hours >= 0) {
    hours = "0" + hours.toString();
  } else if (hours < 0) {
    hours = 24 + hours;
    weekDay = findWeekDay(localTime.getUTCDay() - 1, language);
  } else if (hours >= 24) {
    hours = hours - 24;
    weekDay = findWeekDay(localTime.getUTCDay() + 1, language);
  }
  const year = localTime.getUTCFullYear();

  return (
    <div className={s.wrapper}>
      <span>{hours}</span>
      <span>:</span>
      <span>{minutes}</span>
      {/* <span className={s.date}>{date}</span> */}
      <span>{weekDay}</span>
      <span>{month}</span>
      <span>{year}</span>
    </div>
  );
};

export default Date;
