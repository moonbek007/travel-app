import React from "react";
import headerStyles from "./header.module.css";
import leftArrowLogo from "../../assets/left_arrow.svg";
import rightArrowLogo from "../../assets/right_arrow.svg";
import travelAppLogo from "../../assets/travel_app_logo.png";
import homeIcon from "../../assets/home_icon.svg";

import { Link } from "react-router-dom";

import { useContext } from "react";
import TravelAppContext from "../context/context";
import { handleLanguageChange } from "../handlers/handlers";

function CardHeader() {
  const { language, dispatch } = useContext(TravelAppContext);

  return (
    <header>
      <div className={headerStyles.rowOne}>
        <img src={travelAppLogo} alt="travel-logo" />
        <div>
          <Link to="/main">
            <img src={homeIcon} alt="home-icon" />
          </Link>
          <select
            name="languages"
            id="languages"
            value={language}
            onChange={(event) => handleLanguageChange(event, dispatch)}
          >
            <option value="EN">EN</option>
            <option value="РУС">РУС</option>
            <option value="NA">NA</option>
          </select>
        </div>
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
