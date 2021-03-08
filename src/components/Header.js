import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { FaTrash } from "react-icons/fa";
function Header() {
  return (
    <header className="container-fluid bg-success">
      <div className="row d-flex justify-content-between">
        <div className="col-1 d-flex justify-content-center align-items-center">
          <img
            src="https://www.freeiconspng.com/thumbs/travel-icon/travel-guide-icon-map-ticket-travel-icon-17.png"
            alt="travel app logo"
            width="100%"
          />
        </div>
        <div className="col-1 d-flex justify-content-center align-items-center">
          <select
            name="current-language"
            value="language"
            id="language"
            className="form-control form-control-lg"
          >
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="">Third</option>
          </select>
        </div>
      </div>
      <div className="row swipe-buttons d-flex justify-content-between align-items-center">
        <button className="btn btn-light">
          <BsChevronLeft />
        </button>
        <button className="btn btn-light">
          <BsChevronRight />
        </button>
      </div>
      <div className="row search d-flex justify-content-around align-items-center">
        <input
          type="text"
          className="form-control"
          placeholder="e.g. Italy , e.g. Rome"
        />
        <button className="btn btn-primary">
          <GoSearch />
        </button>
        <button className="btn btn-danger">
          <FaTrash />
        </button>
      </div>
    </header>
  );
}

export default Header;
