const initialState = {
  "passengers": 2,
  "luggage": 2,
  "sport-luggage": 0,
  "animals": 0,
  "children-seats": 0
};

function reducer (state = initialState, action) {
  switch (action.type) {
    case "OPTION_UPDATE":
      return {...state, ...action.payload};
    default:
      return state;
  }
}

export default reducer;