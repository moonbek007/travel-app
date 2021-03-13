import React from "react";
import shortInfoStyles from "./shortinfo.module.css";
function ShortInfo({ capital, info, picture, language }) {
  return (
    <div className={shortInfoStyles.countryInfo}>
      <div className={shortInfoStyles.mainPhoto}>
        <img src={picture} alt="pic" width="60%" />
        <h3>
          {language === "EN"
            ? `About ${capital}.`
            : language === "РУС"
            ? `Про ${capital}.`
            : `${capital} 
hakkında.`}
        </h3>
        <p>{info}</p>
      </div>
    </div>
  );
}

export default ShortInfo;
