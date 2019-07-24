const filtersDefault = {
  text: "",
  sort: "date", //amount
  startDate: undefined,
  endDate: undefined
};

export default (state = filtersDefault, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER": {
      return { ...state, text: action.text };
    }

    case "SORT_FILTER": {
      return { ...state, sort: action.sort };
    }

    case "START_DATE_FILTER": {
      return { ...state, startDate: action.startDate };
    }

    case "END_DATE_FILTER": {
      return { ...state, endDate: action.endDate };
    }

    default:
      return state;
  }
};
