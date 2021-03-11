import React from "react";
import s from "./date.module.css";

const Date = () => {

  const min = '08';
  const hours = '28';
  const date = '28.08';

  return (
    <div className={s.wrapper}>
      <span>{min}</span>
      <span>:</span>
      <span>{hours}</span>
      <span className={s.date}>{date}</span>
    </div>
  );
};

export default Date;
