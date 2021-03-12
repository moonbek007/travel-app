import { countries } from "../data/data";

export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return { ...state, language: action.payload };
    case "CHANGE_SEARCH_TEXT":
      return { ...state, searchText: action.payload };
    case "CLEAR_SEARCH_TEXT":
      return { ...state, searchText: "", countries };
    case "SUBMIT_SEARCH_TEXT":
      const regex = new RegExp(state.searchText, "i");
      const newCountries = countries.filter((country) => {
        if (state.language === "EN") {
          return regex.test(country.countryEN) || regex.test(country.capitalEN);
        } else if (state.language === "РУС") {
          return regex.test(country.countryRU) || regex.test(country.capitalRU);
        } else if (state.language === "O'Z") {
          return regex.test(country.countryUZ) || regex.test(country.capitalUZ);
        }
      });
      return { ...state, countries: newCountries };
    case "SET_COUNTRY_TO_DISPLAY":
      return { ...state, countryToDisplay: action.payload };
    default:
      break;
  }
  return state;
};

export const defaultState = {
  language: "EN",
  searchText: "",
  countries,
  countryToDisplay: "Switzerland",
};
