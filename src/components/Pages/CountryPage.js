import React from "react";
import s from "./countryPage.module.css";
import ShortInfo from "../ShortInfo/ShortInfo";
// the link to the main page should locate in the header logo

const CountryPage = () => {
  return (
    <div>
      <div className={s.main}>
        <div className={s.widget}>
          <div className={s.weather}>weather</div>
          <div className={s.date}>date</div>
          <div className={s.currency}>currency</div>
        </div>
        <ShortInfo />
        <div className={s.photoBox}>Photogalery</div>

        <div className={s.mapBox}>
          <div className={s.text}>some text</div>
          <div className={s.map}>MAP</div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
