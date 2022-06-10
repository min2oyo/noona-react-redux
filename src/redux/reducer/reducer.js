const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case `INCREMENT`:
      return { ...state, count: state.count + 1 };
    default:
      return { ...state };
  }
  // if (action.type === `INCREMENT`) {
  //   return { ...state, count: state.count + 1 };
  // }
  // return { ...state };
}

export default reducer;