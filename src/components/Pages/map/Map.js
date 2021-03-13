import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import st from './map.module.css';

const MapWidget = ({ coordinates, region }) => {

  const mapRef = React.createRef(null);
  const lang = "ru_RU";   // "en_US" - english   "tr_TR" - turkish

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