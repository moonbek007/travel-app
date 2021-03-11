import React from "react";
import s from "./countryPage.module.css";

import ShortInfo from "../ShortInfo/ShortInfo";

import Widgets from "../Widgets/Widgets";

const CountryPage = () => {
  return (
    <div>
      <div className={s.main}>
        <Widgets />
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
