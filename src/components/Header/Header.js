import React from "react";
import headerStyles from "./header.module.css";
function Header() {
  return (
    <header>
      <div className={headerStyles.rowOne}>
        <img
          src="https://i.pinimg.com/originals/36/3d/e7/363de73bdfcbb047c5d8f1786389c818.png"
          alt="travel-logo"
        />
        <select name="languages" id="languages" value="EN">
          <option value="EN">EN</option>
          <option value="RU">RU</option>
          <option value="NA">NA</option>
        </select>
      </div>
      <div className={headerStyles.rowTwo}>
        <button>
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/271/271220.svg?token=exp=1615356068~hmac=0d65a23971e0da2f8e57630378aa113d"
            alt="left-arrow-logo"
          />
        </button>
        <button>
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/271/271228.svg?token=exp=1615356440~hmac=737f4d25bb8734bc5bd06ebf965efea2"
            alt="right-arrow-logo"
          />
        </button>
      </div>
      <div className={headerStyles.rowThree}>
        <input type="text" placeholder="e.g. Italy , e.g. Rome" />
        <button>
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/149/149852.svg?token=exp=1615356661~hmac=39aa221982e3bd307bbf9bcb063444ca"
            alt="search-icon"
          />
        </button>
        <button>
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/1828/1828843.svg?token=exp=1615356803~hmac=4b823f4a295948221e574c82ecfa9f90"
            alt="clear-icon"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
