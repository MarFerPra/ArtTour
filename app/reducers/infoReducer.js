const initialState = {
  code: null,
  data: {
    mainText: null
  }
};

const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return state;
    default:
      return state;
  }
}

export default chatReducer;
