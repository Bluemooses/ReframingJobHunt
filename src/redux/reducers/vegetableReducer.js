const vegetableReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_VEGETABLES":
      return action.payload;
    case "UNSET_VEGETABLES":
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default vegetableReducer;
