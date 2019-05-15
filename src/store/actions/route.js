export const setPickup = (value) => ({
  type: "SET_PICKUP",
  payload: {
    pickup: value
  }
});

export const setDestination = (value) => ({
  type: "SET_DESTINATION",
  payload: {
    destination: value
  }
});

export const setVoucherCode = (value) => ({
  type: "SET_VOUCHERCODE",
  payload: {
    voucherCode: value
  }
});