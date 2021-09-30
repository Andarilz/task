let initialState = {
  data: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'set_results':
      return {
        data: action.payload
      };
    default:
      return state
  }
};
