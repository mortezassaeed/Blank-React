const INITIAL_STATE = {
  persistData: [{ id: 0, count: 0 }]
};

const samplePersistReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_PERSISTDATA":
      return {
        ...state,
        persistData: [action.payload, ...state.persistData]
      };
    case "RESET_PERSISTDATA":
      return {
        ...state,
        persistData: []
      };
    default:
      return state;
  }
};

export default samplePersistReducer;
