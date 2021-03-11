export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return { ...state, language: action.payload };
    default:
      break;
  }
  return state;
};

export const defaultState = {
  language: "EN",
};
