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
          break;
      }
      break;
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
          break;
      }
      break;
    case "O'Z":
      switch (currentCountry) {
        case "Sveysariya":
          return {
            ...switzerland,
            capital: switzerland.capitalUZ,
            info: switzerland.infoUZ,
          };
        case "Belarus":
          return {
            ...belarus,
            capital: belarus.capitalUZ,
            info: belarus.infoUZ,
          };
        case "Polsha":
          return { ...poland, capital: poland.capitalUZ, info: poland.infoUZ };
        case "AQSH":
          return { ...usa, capital: usa.capitalUZ, info: usa.infoUZ };
        case "O'zbekiston":
          return {
            ...uzbekistan,
            capital: uzbekistan.capitalUZ,
            info: uzbekistan.infoUZ,
          };
        case "Rossiya":
          return { ...russia, capital: russia.capitalUZ, info: russia.infoUZ };
        case "Ispaniya":
          return { ...spain, capital: spain.capitalUZ, info: spain.infoUZ };
        case "Italiya":
          return { ...italy, capital: italy.capitalUZ, info: italy.infoUZ };
        default:
          return { ...italy, capital: italy.capitalUZ, info: italy.infoUZ };
          break;
      }
      break;
    default:
      break;
  }
};

export default chooseCountryInfo;
