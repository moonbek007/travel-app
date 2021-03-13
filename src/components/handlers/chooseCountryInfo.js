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
          };
        case "Belarus":
          return {
            ...belarus,
            capital: belarus.capitalEN,
            info: belarus.infoEN,
          };
        case "Poland":
          return { ...poland, capital: poland.capitalEN, info: poland.infoEN };
        case "USA":
          return { ...usa, capital: usa.capitalEN, info: usa.infoEN };
        case "Uzbekistan":
          return {
            ...uzbekistan,
            capital: uzbekistan.capitalEN,
            info: uzbekistan.infoEN,
          };
        case "Russia":
          return { ...russia, capital: russia.capitalEN, info: russia.infoEN };
        case "Spain":
          return { ...spain, capital: spain.capitalEN, info: spain.infoEN };
        case "Italy":
          return { ...italy, capital: italy.capitalEN, info: italy.infoEN };
        default:
          return { ...italy, capital: italy.capitalEN, info: italy.infoEN };
      }
    case "РУС":
      switch (currentCountry) {
        case "Щвейцария":
          return {
            ...switzerland,
            capital: switzerland.capitalRU,
            info: switzerland.infoRU,
          };
        case "Беларусь":
          return {
            ...belarus,
            capital: belarus.capitalRU,
            info: belarus.infoRU,
          };
        case "Польша":
          return { ...poland, capital: poland.capitalRU, info: poland.infoRU };
        case "США":
          return { ...usa, capital: usa.capitalRU, info: usa.infoRU };
        case "Узбекистан":
          return {
            ...uzbekistan,
            capital: uzbekistan.capitalRU,
            info: uzbekistan.infoRU,
          };
        case "Россия":
          return { ...russia, capital: russia.capitalRU, info: russia.infoRU };
        case "Испания":
          return { ...spain, capital: spain.capitalRU, info: spain.infoRU };
        case "Италия":
          return { ...italy, capital: italy.capitalRU, info: italy.infoRU };
        default:
          return { ...italy, capital: italy.capitalRU, info: italy.infoRU };
      }
    case "TÜR":
      switch (currentCountry) {
        case "İsviçre":
          return {
            ...switzerland,
            capital: switzerland.capitalTR,
            info: switzerland.infoTR,
          };
        case "Belarus":
          return {
            ...belarus,
            capital: belarus.capitalTR,
            info: belarus.infoTR,
          };
        case "Polonya":
          return { ...poland, capital: poland.capitalTR, info: poland.infoTR };
        case "A.B.D.":
          return { ...usa, capital: usa.capitalTR, info: usa.infoTR };
        case "Özbekistan":
          return {
            ...uzbekistan,
            capital: uzbekistan.capitalTR,
            info: uzbekistan.infoTR,
          };
        case "Rusya":
          return { ...russia, capital: russia.capitalTR, info: russia.infoTR };
        case "İspanya":
          return { ...spain, capital: spain.capitalTR, info: spain.infoTR };
        case "İtalya":
          return { ...italy, capital: italy.capitalTR, info: italy.infoTR };
        default:
          return { ...italy, capital: italy.capitalTR, info: italy.infoTR };
      }
    default:
      return { ...italy, capital: italy.capitalTR, info: italy.infoTR };
  }
};

export default chooseCountryInfo;
