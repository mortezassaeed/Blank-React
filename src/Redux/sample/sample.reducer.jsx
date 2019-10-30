const INITIAL_STATE = {
  samples: [
    { id: 1, name: "First sample" },
    { id: 2, name: "Second sample" },
    { id: 3, name: "Third sample" }
  ]
};

const sampleReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_SAMPLE":
      return {
        ...state,
        samples: [action.payload, ...state.samples]
      };
    default:
      return { ...state };
  }
};

export default sampleReducer;
