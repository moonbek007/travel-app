import React from "react";
import headerStyles from "./header.module.css";
import leftArrowLogo from "../../assets/left_arrow.svg";
import rightArrowLogo from "../../assets/right_arrow.svg";
import searchLogo from "../../assets/search_icon.svg";
import clearLogo from "../../assets/clear_icon.svg";
import travelAppLogo from "../../assets/travel_app_logo.png";
import homeIcon from "../../assets/home_icon.svg";

import { Link } from "react-router-dom";

function MainPageHeader() {
  return (
    <header>
      <div className={headerStyles.rowOne}>
        <img src={travelAppLogo} alt="travel-logo" />
        <div>
          <Link to="/main">
            <img src={homeIcon} alt="home-icon" />
          </Link>
          <select name="languages" id="languages" value="EN">
            <option value="EN">EN</option>
            <option value="RU">RU</option>
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
      <div className={headerStyles.rowThree}>
        <input type="text" placeholder="e.g. Italy , e.g. Rome" />
        <button>
          <img src={searchLogo} alt="search-icon" />
        </button>
        <button>
          <img src={clearLogo} alt="clear-icon" />
        </button>
      </div>
    </header>
  );
}

export default MainPageHeader;
