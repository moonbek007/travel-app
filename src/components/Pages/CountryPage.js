import React from "react";
import s from "./countryPage.module.css";

import ShortInfo from "../ShortInfo/ShortInfo";
import Widgets from "../Widgets/Widgets";
import MapWidget from "./map/Map";
import PhotoVideo from "../PhotoVideo/PhotoVideo";

const CountryPage = () => {
  return (
    <div>
      <div className={s.main}>
        <Widgets />
        <ShortInfo />

        <div className={s.mapBox}>
          <div className={s.map}>
            <MapWidget />
          </div>
          <div className={s.text}>some text</div>
        </div>

        <PhotoVideo />
      </div>
    </div>
  );
};

export default CountryPage;
