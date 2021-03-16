import React, { useRef, useEffect, useContext } from "react";
import useParallax from "../../custom-hooks/useParallax";
import s from "./header.module.css";

import leftArrowLogo from "../../assets/left_arrow.svg";
import rightArrowLogo from "../../assets/right_arrow.svg";
import searchLogo from "../../assets/search_icon.svg";
import clearLogo from "../../assets/clear_icon.svg";
import travelAppLogo from "../../assets/travel_app_logo.png";

import TravelAppContext from "../context/context";

import {
  handleLanguageChange,
  handleSearchTextChange,
  handleSearchTextSubmit,
  handleSearchTextClear,
} from "../handlers/handlers";

function MainPageHeader() {
  const inputRef = useRef(null);
  const currentBgPosition = useParallax();
  const { searchText, language, dispatch } = useContext(TravelAppContext);

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        handleSearchTextSubmit(event, dispatch);
      }
    });
  }, []);

  return (
    <header style={currentBgPosition}>
      <div className={s.rowOne}>
        <img src={travelAppLogo} alt="travel-logo" />
        <div>
          <select
            name="languages"
            id="languages"
            value={language}
            onChange={(event) => {
              handleLanguageChange(event, dispatch);
            }}
          >
            <option value="EN">EN</option>
            <option value="РУС">РУС</option>
            <option value="TÜR">TÜR</option>
          </select>
        </div>
      </div>
      <div className={s.rowTwo} />
      <div className={s.rowThree}>
        <button
          onClick={(event) => {
            handleSearchTextSubmit(event, dispatch);
          }}
          style={{
            borderTopLeftRadius: "15px",
            borderBottomLeftRadius: "15px",
          }}
        >
          <img src={clearLogo} alt="search-icon" />
        </button>
        <input
          type="text"
          placeholder={`${
            language === "EN"
              ? "Italy , Rome"
              : language === "РУС"
              ? "Италия , Рим"
              : "İtalya , Roma"
          }`}
          ref={inputRef}
          value={searchText}
          onChange={(event) => {
            handleSearchTextChange(event, dispatch);
            handleSearchTextSubmit(event, dispatch);
          }}
        />
        <button
          onClick={(event) => {
            handleSearchTextClear(event, dispatch);
          }}
          style={{
            borderTopRightRadius: "15px",
            borderBottomRightRadius: "15px",
          }}
        >
          <img src={searchLogo} alt="clear-icon" />
        </button>
      </div>
    </header>
  );
}

export default MainPageHeader;
