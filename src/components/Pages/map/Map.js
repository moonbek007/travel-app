import { YMaps, Map } from 'react-yandex-maps';
import s from './map.module.css'


const MapWidget = () => (
    <div className={s.layer}>
  <YMaps>
      <Map 
      defaultState={{ center: [55.75, 37.57], zoom: 9 }} 
      height="100%"
      width="100%"
      />
  </YMaps>
    </div>
);

export default MapWidget;