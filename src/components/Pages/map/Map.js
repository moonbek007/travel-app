import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import st from './map.module.css';

const mapState = {
  center: [53.902496, 27.561481],
  zoom: 5, 
  region: "BY"
};

function MapWidget() {

  const mapRef = React.createRef(null);
  const lang = "ru_RU";   // "en_US" - english   "tr_TR" - turkish
  
  const getRegions = ymaps => {
    if (mapRef && mapRef.current) {
  
      ymaps.borders
        .load("001", {
          quality: 2
        })
        .then(function (result) {
          let country = result.features.find(item => item.properties.iso3166 === mapState.region); 
          console.log(country)
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
          defaultState={mapState}
          onLoad={ymaps => getRegions(ymaps)}
          modules={["borders", "GeoObject"]}
        >
          <Placemark geometry={mapState.center} />
        </ Map>
      </YMaps>
    </div>
  );
}

export default MapWidget;