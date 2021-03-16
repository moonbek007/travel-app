import React from "react";
import s from "./header.module.css";
import { Link } from "react-router-dom";
import useParallax from "../../custom-hooks/useParallax";

import leftArrowLogo from "../../assets/left_arrow.svg";
import rightArrowLogo from "../../assets/right_arrow.svg";
import travelAppLogo from "../../assets/travel_app_logo.png";

import { useContext } from "react";
import TravelAppContext from "../context/context";
import { handleLanguageChange } from "../handlers/handlers";

// import { removeInterval, intervalFunction } from "../Widgets/Date/Date";

function CardHeader() {
  const { language, dispatch } = useContext(TravelAppContext);
  const currentBgPosition = useParallax();

  return (
    <header style={currentBgPosition}>
      <div className={s.rowOne}>
        <span>
          <Link
            to="/"
            // onClick={(event) => removeInterval(event, intervalFunction)}
          >
            <img src={travelAppLogo} alt="travel-logo" />
          </Link>
        </span>
        <div>
          <select
            name="languages"
            id="languages"
            value={language}
            onChange={(event) => handleLanguageChange(event, dispatch)}
          >
            <option value="EN">EN</option>
            <option value="РУС">РУС</option>
            <option value="TÜR">TÜR</option>
          </select>
        </div>
      </div>

      <div className={s.rowTwo}></div>
      <div className={s.rowThree}></div>
    </header>
  );
}

export default CardHeader;
