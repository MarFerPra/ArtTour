const initialState = {
  information: null
};

export default function scanner(state = initialState, action) {
  switch (action.type) {
    case 'SCANNED':
      break;
    default:
      return state;
  }
}
