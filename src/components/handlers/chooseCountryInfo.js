import {
  switzerland,
  poland,
  usa,
  russia,
  spain,
  italy,
  czechia,
  turkey,
} from "../Pages/countryInfo/countryInfo";
const chooseCountryInfo = (currentCountry) => {
  switch (currentCountry) {
    case "Switzerland":
      return {
        ...switzerland,
        capital: switzerland.capitalEN,
        info: switzerland.infoEN,
        area: switzerland.area,
        cityTime: switzerland.cityTime,
      };
    case "Czechia":
      return {
        ...czechia,
        capital: czechia.capitalEN,
        info: czechia.infoEN,
        area: czechia.area,
        cityTime: czechia.cityTime,
      };
    case "Poland":
      return {
        ...poland,
        capital: poland.capitalEN,
        info: poland.infoEN,
        area: poland.area,
        cityTime: poland.cityTime,
      };
    case "U.S.A.":
      return {
        ...usa,
        capital: usa.capitalEN,
        info: usa.infoEN,
        area: usa.area,
        cityTime: usa.cityTime,
      };
    case "Turkey":
      return {
        ...turkey,
        capital: turkey.capitalEN,
        info: turkey.infoEN,
        area: turkey.area,
        cityTime: turkey.cityTime,
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
    case "Швейцария":
      return {
        ...switzerland,
        capital: switzerland.capitalRU,
        info: switzerland.infoRU,
        area: switzerland.area,
        cityTime: switzerland.cityTime,
      };
    case "Чехия":
      return {
        ...czechia,
        capital: czechia.capitalRU,
        info: czechia.infoRU,
        area: czechia.area,
        cityTime: czechia.cityTime,
      };
    case "Польша":
      return {
        ...poland,
        capital: poland.capitalRU,
        info: poland.infoRU,
        area: poland.area,
        cityTime: poland.cityTime,
      };
    case "С.Ш.А.":
      return {
        ...usa,
        capital: usa.capitalRU,
        info: usa.infoRU,
        area: usa.area,
        cityTime: usa.cityTime,
      };
    case "Турция":
      return {
        ...turkey,
        capital: turkey.capitalRU,
        info: turkey.infoRU,
        area: turkey.area,
        cityTime: turkey.cityTime,
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
    case "İsviçre":
      return {
        ...switzerland,
        capital: switzerland.capitalTR,
        info: switzerland.infoTR,
        area: switzerland.area,
        cityTime: switzerland.cityTime,
      };
    case "Çekya":
      return {
        ...czechia,
        capital: czechia.capitalTR,
        info: czechia.infoTR,
        area: czechia.area,
        cityTime: czechia.cityTime,
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
    case "Türkiye":
      return {
        ...turkey,
        capital: turkey.capitalTR,
        info: turkey.infoTR,
        area: turkey.area,
        cityTime: turkey.cityTime,
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
};

export default chooseCountryInfo;
