export const optionUpdate = (id, value) => ({
  type: "OPTION_UPDATE",
  payload: {
    [id]: value
  }
});