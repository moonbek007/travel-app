import React from "react";
import s from "./card.module.css";
import { Link } from "react-router-dom";

import TravelAppContext from "../../context/context";

const Card = ({ imgUrl, country, capital }) => {
  const { dispatch } = React.useContext(TravelAppContext);
  return (
    <div className={s.wrapper}>
      <div className={s.inner}>
        <div className={s.front} style={{ backgroundImage: `url(${imgUrl})` }}>
          <div className={s.country}>
            <span className={s.location}>{country}</span>
          </div>
          <div className={s.capital}>
            <span className={s.location}>{capital}</span>
          </div>
        </div>
        <div className={s.back}>
          <Link
            to="/country"
            className={s.link}
            onClick={() => {
              dispatch({ type: "SET_COUNTRY_TO_DISPLAY", payload: country });
            }}
          >
            <h2>click on me!</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
