import React from "react";
import shortInfoStyles from "./shortinfo.module.css";
function ShortInfo({ country, capital, info, picture, language }) {
  return (
    <div className={shortInfoStyles.countryInfo}>
      <div className={shortInfoStyles.mainPhoto}>
        <img src={picture} alt="pic" width="60%" />
        <h3>
          {language === "EN"
            ? `${country} , capital ${capital}.`
            : language === "РУС"
            ? `${country} , столица ${capital}.`
            : `${country} , başkent ${capital}.`}
        </h3>
        <p>{info}</p>
      </div>
    </div>
  );
}

export default ShortInfo;
