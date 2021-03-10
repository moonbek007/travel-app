import React from "react";
import headerStyles from "./header.module.css";
import leftArrowLogo from "../../assets/left_arrow.svg";
import rightArrowLogo from "../../assets/right_arrow.svg";
import travelAppLogo from "../../assets/travel_app_logo.png";
function CardHeader() {
  return (
    <header>
      <div className={headerStyles.rowOne}>
        <img src={travelAppLogo} alt="travel-logo" />
        <select name="languages" id="languages" value="EN">
          <option value="EN">EN</option>
          <option value="RU">RU</option>
          <option value="NA">NA</option>
        </select>
      </div>
      <div className={headerStyles.rowTwo}>
        <button>
          <img src={leftArrowLogo} alt="left-arrow-logo" />
        </button>
        <button>
          <img src={rightArrowLogo} alt="right-arrow-logo" />
        </button>
      </div>
      <div className={headerStyles.rowThree}></div>
    </header>
  );
}

export default CardHeader;
