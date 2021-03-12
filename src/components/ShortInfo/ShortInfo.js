import React from "react";
import shortInfoStyles from "./shortinfo.module.css";
function ShortInfo({ capital, info, pictures, language }) {
  return (
    <div className={shortInfoStyles.countryInfo}>
      <div className={shortInfoStyles.mainPhoto}>
        <img src={pictures[0].original} alt="pic" width="60%" />
        <h3>
          {language === "EN"
            ? `About ${capital}.`
            : language === "РУС"
            ? `Про ${capital}.`
            : `${capital} haqida.`}
        </h3>
        <p>{info}</p>
      </div>
    </div>
  );
}

export default ShortInfo;
