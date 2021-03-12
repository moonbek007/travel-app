import React from "react";
import s from "./header.module.css";
import { Link } from "react-router-dom";
import useParallax from "../../custom-hooks/useParallax";

import leftArrowLogo from "../../assets/left_arrow.svg";
import rightArrowLogo from "../../assets/right_arrow.svg";
import travelAppLogo from "../../assets/travel_app_logo.png";

function CardHeader() {
  const currentBgPosition = useParallax();

  return (
    <header style={currentBgPosition}>

      <div className={s.rowOne}>
        <span>
          <Link to='/'>
            <img src={travelAppLogo} alt="travel-logo" />
          </Link>
        </span>
        <div>
          <select name="languages" id="languages" value="EN">
            <option value="EN">EN</option>
            <option value="RU">RU</option>
            <option value="NA">NA</option>
          </select>
        </div>
      </div>

      <div className={s.rowTwo}>
        <button>
          <img src={leftArrowLogo} alt="left-arrow-logo" />
        </button>
        <button>
          <img src={rightArrowLogo} alt="right-arrow-logo" />
        </button>
      </div>
      
      <div className={s.rowThree}></div>
    </header>
  );
}

export default CardHeader;
