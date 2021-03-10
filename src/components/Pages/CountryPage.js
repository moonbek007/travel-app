import React from "react";
import s from "./countryPage.module.css";

import Widgets from "../Widgets/Widgets";

const CountryPage = () => {
  return (
    <div>
      <div className={s.main}>
        <Widgets />

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
