function reducer (state = {}, action) {
  switch (action.type) {
    case "SET_PICKUP":
    case "SET_DESTINATION":
    case "SET_VOUCHERCODE":
      return {...state, ...action.payload};
    default:
      return state;
  }
}

export default reducer;