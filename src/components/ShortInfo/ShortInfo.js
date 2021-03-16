import React from "react";
import s from "./shortinfo.module.css";
function ShortInfo({ capital, info, picture, language }) {
  return (
    <div className={s.countryInfo}>
      <div className={s.mainPhoto}>
        <img src={picture} alt="pic" width="60%" />
        <h3>
          {language === "EN"
            ? `About ${capital}.`
            : language === "РУС"
            ? `Про ${capital}.`
            : `${capital} 
hakkında.`}
        </h3>
        <p className={s.country_information}>{info}</p>
      </div>
    </div>
  );
}

export default ShortInfo;
