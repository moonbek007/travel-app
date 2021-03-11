import React from "react";
import s from "./countryPage.module.css";

import ShortInfo from "../ShortInfo/ShortInfo";

import Widgets from "../Widgets/Widgets";
import MapWidget from "./map/Map";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "video-react/dist/video-react.css";
import { Player } from "video-react";
const images = [
  {
    original:
      "https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    thumbnail:
      "https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    original:
      "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    thumbnail:
      "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=420&w=320",
  },
];
const CountryPage = () => {
  return (
    <div>
      <div className={s.main}>
        <Widgets />
        <ShortInfo />
        <div className={s.mapBox}>
          <div className={s.map}>
            <MapWidget />
          </div>
          <div className={s.text}>some text</div>
        </div>
        <ImageGallery
          items={images}
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
