import React from "react";
import s from "./countryPage.module.css";

// the link to the main page should locate in the header logo
import { Link } from "react-router-dom";

const CountryPage = () => {
  return (
    <div>
      <Link to="/main">
        <h1 style={{ backgroundColor: "green" }}>
          Test. Click me to retrun to main
      </h1>
      </Link>

      <div className={s.main}>
        <div className={s.widget}>
          <div className={s.weather}>
            weather
        </div>
          <div className={s.date}>
            date
        </div>
          <div className={s.currency}>
            currency
        </div>
        </div>
        <div className={s.countryInfo}>
          <div className={s.mainPhoto}>
            mainPhoto
          </div>
          <div className={s.info}>
            information
          </div>
        </div>
        <div className={s.photoBox}>
          Photogalery
        </div>

        <div className={s.mapBox}>
          <div className={s.text}>
            some text
          </div>
          <div className={s.map}>
            MAP
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
