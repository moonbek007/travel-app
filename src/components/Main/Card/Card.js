import React from "react";
import s from "./card.module.css";

const Card = ({ imgUrl, country, capital }) => {
  return (
    <div 
      className={s.wrapper}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className={s.inner}>
        <div className={s.country}>
          <span className={s.location}>{country}</span>
        </div>
        <div className={s.capital}>
          <span className={s.location}>{capital}</span>
        </div> 
      </div>
    </div>
  );
};

export default Card;