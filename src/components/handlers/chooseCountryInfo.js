import {
  switzerland,
  poland,
  usa,
  uzbekistan,
  belarus,
  russia,
  spain,
  italy,
} from "../Pages/countryInfo/countryInfo";
const chooseCountryInfo = (currentCountry, currentLanguage) => {
  console.log(currentCountry, currentLanguage);
  switch (currentLanguage) {
    case "EN":
      switch (currentCountry) {
        case "Switzerland":
          return {
            ...switzerland,
            capital: switzerland.capitalEN,
            info: switzerland.infoEN,
            area: switzerland.area,
            cityTime: switzerland.cityTime,
          };
        case "Belarus":
          return {
            ...belarus,
            capital: belarus.capitalEN,
            info: belarus.infoEN,
            area: belarus.area,
            cityTime: belarus.cityTime,
          };
        case "Poland":
          return {
            ...poland,
            capital: poland.capitalEN,
            info: poland.infoEN,
            area: poland.area,
            cityTime: poland.cityTime,
          };
        case "USA":
          return {
            ...usa,
            capital: usa.capitalEN,
            info: usa.infoEN,
            area: usa.area,
            cityTime: usa.cityTime,
          };
        case "Uzbekistan":
          return {
            ...uzbekistan,
            capital: uzbekistan.capitalEN,
            info: uzbekistan.infoEN,
            area: uzbekistan.area,
            cityTime: uzbekistan.cityTime,
          };
        case "Russia":
          return {
            ...russia,
            capital: russia.capitalEN,
            info: russia.infoEN,
            area: russia.area,
            cityTime: russia.cityTime,
          };
        case "Spain":
          return {
            ...spain,
            capital: spain.capitalEN,
            info: spain.infoEN,
            area: spain.area,
            cityTime: spain.cityTime,
          };
        case "Italy":
          return {
            ...italy,
            capital: italy.capitalEN,
            info: italy.infoEN,
            area: italy.area,
            cityTime: italy.cityTime,
          };
        default:
          return {
            ...italy,
            capital: italy.capitalEN,
            info: italy.infoEN,
            area: italy.area,
            cityTime: italy.cityTime,
          };
      }
    case "РУС":
      switch (currentCountry) {
        case "Щвейцария":
          return {
            ...switzerland,
            capital: switzerland.capitalRU,
            info: switzerland.infoRU,
            area: switzerland.area,
            cityTime: switzerland.cityTime,
          };
        case "Беларусь":
          return {
            ...belarus,
            capital: belarus.capitalRU,
            info: belarus.infoRU,
            area: belarus.area,
            cityTime: belarus.cityTime,
          };
        case "Польша":
          return {
            ...poland,
            capital: poland.capitalRU,
            info: poland.infoRU,
            area: poland.area,
            cityTime: poland.cityTime,
          };
        case "США":
          return {
            ...usa,
            capital: usa.capitalRU,
            info: usa.infoRU,
            area: usa.area,
            cityTime: usa.cityTime,
          };
        case "Узбекистан":
          return {
            ...uzbekistan,
            capital: uzbekistan.capitalRU,
            info: uzbekistan.infoRU,
            area: uzbekistan.area,
            cityTime: uzbekistan.cityTime,
          };
        case "Россия":
          return {
            ...russia,
            capital: russia.capitalRU,
            info: russia.infoRU,
            area: russia.area,
            cityTime: russia.cityTime,
          };
        case "Испания":
          return {
            ...spain,
            capital: spain.capitalRU,
            info: spain.infoRU,
            area: spain.area,
            cityTime: spain.cityTime,
          };
        case "Италия":
          return {
            ...italy,
            capital: italy.capitalRU,
            info: italy.infoRU,
            area: italy.area,
            cityTime: italy.cityTime,
          };
        default:
          return {
            ...italy,
            capital: italy.capitalRU,
            info: italy.infoRU,
            area: italy.area,
            cityTime: italy.cityTime,
          };
      }
    case "TÜR":
      switch (currentCountry) {
        case "İsviçre":
          return {
            ...switzerland,
            capital: switzerland.capitalTR,
            info: switzerland.infoTR,
            area: switzerland.area,
            cityTime: switzerland.cityTime,
          };
        case "Belarus":
          return {
            ...belarus,
            capital: belarus.capitalTR,
            info: belarus.infoTR,
            area: belarus.area,
            cityTime: belarus.cityTime,
          };
        case "Polonya":
          return {
            ...poland,
            capital: poland.capitalTR,
            info: poland.infoTR,
            area: poland.area,
            cityTime: poland.cityTime,
          };
        case "A.B.D.":
          return {
            ...usa,
            capital: usa.capitalTR,
            info: usa.infoTR,
            area: usa.area,
            cityTime: usa.cityTime,
          };
        case "Özbekistan":
          return {
            ...uzbekistan,
            capital: uzbekistan.capitalTR,
            info: uzbekistan.infoTR,
            area: uzbekistan.area,
            cityTime: uzbekistan.cityTime,
          };
        case "Rusya":
          return {
            ...russia,
            capital: russia.capitalTR,
            info: russia.infoTR,
            area: russia.area,
            cityTime: russia.cityTime,
          };
        case "İspanya":
          return {
            ...spain,
            capital: spain.capitalTR,
            info: spain.infoTR,
            area: spain.area,
            cityTime: spain.cityTime,
          };
        case "İtalya":
          return {
            ...italy,
            capital: italy.capitalTR,
            info: italy.infoTR,
            area: italy.area,
            cityTime: italy.cityTime,
          };
        default:
          return {
            ...italy,
            capital: italy.capitalTR,
            info: italy.infoTR,
            area: italy.area,
            cityTime: italy.cityTime,
          };
      }
    default:
      return {
        ...italy,
        capital: italy.capitalTR,
        info: italy.infoTR,
        area: italy.area,
        cityTime: italy.cityTime,
      };
  }
};

export default chooseCountryInfo;
