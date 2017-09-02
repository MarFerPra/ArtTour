export const setArtCode = text => ({
  type: 'SET_ART_CODE',
  text
});

export const setInputError = error => ({
  type: 'SET_INPUT_ERROR',
  error
});

export const clearInfo = () => ({
  type: 'CLEAR_INFO'
})

export const fetchInfoStart = () => ({
  type: 'FETCH_INFO_START'
});

export const fetchInfoSuccess = data => ({
  type: 'FETCH_INFO_SUCCESS',
  ...data
});

export const fetchInfoError = error => ({
  type: 'FETCH_INFO_ERROR',
  error
});

const requestInfo = async (code) =>
  fetch(`http://192.168.1.104:8080/info?code=${code}`)
    .then(res => res.json())
    .catch(error => {console.log('Network Error', error); return error;});

export const fetchInfo = (code) => {
  return (dispatch) => {
    dispatch(fetchInfoStart());
    return requestInfo(code).then(({error, data}) => {
      if(error){
        dispatch(fetchInfoError(error));
      } else {
        dispatch(fetchInfoSuccess(data));
      }
    });
  }
};
