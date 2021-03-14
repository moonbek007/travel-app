import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import st from './map.module.css';

import TravelAppContext from "../../context/context";

const MapWidget = ({ coordinates, region }) => {

  const { language } = React.useContext(TravelAppContext);
  const mapRef = React.createRef(null);
  console.log(language)
  let lang;
  if (language === 'РУС') {
    lang = "ru_RU";
  } else if (language === 'EN') {
    lang = "en_US";
  } else {
    lang = "tr_TR";
  }

  const getRegions = ymaps => {
    if (mapRef && mapRef.current) {

      ymaps.borders
        .load("001", {
          quality: 2
        })
        .then(function (result) {
          let country = result.features.find(item => item.properties.iso3166 === region);

          let geoObject = new ymaps.GeoObject(country);
          mapRef.current.geoObjects.add(geoObject);
        });
    }
  };

  return (
    <div className={st.layer}>
      <YMaps key={lang} query={{ lang }}>
        <Map
          height="100%"
          width="100%"
          instanceRef={mapRef}
          defaultState={{ center: coordinates, zoom: 5 }}
          onLoad={ymaps => getRegions(ymaps)}
          modules={["borders", "GeoObject"]}
        >
          <Placemark geometry={coordinates} />
        </ Map>
      </YMaps>
    </div>
  );
}

export default MapWidget;