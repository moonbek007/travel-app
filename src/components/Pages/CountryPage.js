import React from "react";
import s from "./countryPage.module.css";

import ShortInfo from "../ShortInfo/ShortInfo";

import Widgets from "../Widgets/Widgets";
import MapWidget from "./map/Map";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "video-react/dist/video-react.css";
import { Player } from "video-react";

import TravelAppContext from "../context/context";
import chooseCountryInfo from "../handlers/chooseCountryInfo";

const CountryPage = () => {
  const { countryToDisplay, language } = React.useContext(TravelAppContext);

  let country = chooseCountryInfo(countryToDisplay);

  return (
    <div>
      <div className={s.main}>
        <Widgets coordinates={country.coordinates} />
        <ShortInfo
          {...country}
          language={language}
          picture={country.pictures[0].original}
        />
        <div className={s.mapBox}>
          <div className={s.map}>
            <MapWidget coordinates={country.coordinates} 
                       region={country.region}
            />
          </div>
          <div className={s.text}>some text</div>
        </div>
        <ImageGallery
          items={country.pictures}
          showBullets={true}
          showIndex={true}
          thumbnailPosition={"bottom"}
        />
        <div
          style={{
            width: "80%",
            margin: "20px auto 20px auto",
          }}
        >
          <Player
            playsInline
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
