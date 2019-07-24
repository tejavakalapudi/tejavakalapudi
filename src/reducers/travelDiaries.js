const travelDiariesDefault = [];

export default (state = travelDiariesDefault, action) => {
  switch (action.type) {
    case "ADD_TRAVEL": {
      return [...state, action.travel];
    }

    case "SET_TRAVEL_PAGES": {
      return action.travelPages;
    }

    default:
      return state;
  }
};
