import { countries } from "../data/data";

export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return { ...state, language: action.payload };
    case "CHANGE_SEARCH_TEXT":
      return { ...state, searchText: action.payload };
    default:
      break;
  }
  return state;
};

export const defaultState = {
  language: "EN",
  searchText: "",
  countries,
};
