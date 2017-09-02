const initialState = {
  artCode: '',
  inputError: '',
  data: {
    error: ''
  }
};

const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ART_CODE':
      return {
        ...state,
        artCode: action.text,
        inputError: '',
      };
    case 'SET_INPUT_ERROR':
      return {
        ...state,
        inputError: action.error
      };
    case 'CLEAR_INFO':
      return {
        ...state,
        inputError: '',
        artCode: '',
        data: {
          loading: false,
          error: ''
        }
      };
    case 'FETCH_INFO_START':
      return {
        ...state,
        data: {
          loading: true,
          error: '',
        }
      };
    case 'FETCH_INFO_SUCCESS':
      return {
        ...state,
        data: {
          error: '',
          loading: false,
          title: action.title,
          body: action.body
        }
      };
    case 'FETCH_INFO_ERROR':
      return {
        ...state,
        data: {
          loading: false,
          error: action.error
        }
      }
    default:
      return state;
  }
}

export default infoReducer;
