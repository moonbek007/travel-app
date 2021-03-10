import React from "react";
import s from "./currency.module.css";

const Currency = () => {

  const toUsd = '1.1798';
  const toEur = '0.3650';
  const toRub = '27.1798';

  return (
    <div className={s.wrapper}>
      <div className={s.item}>USD: {toUsd}</div>
      <div className={s.item}>EUR: {toEur}</div>
      <div className={s.item}>RUB: {toRub}</div>
    </div>
  );
};

export default Currency;
