export const CREATE_USER = 'CREATE_USER';
export const SET_LOADING = 'SET_LOADING';

export const createUser = (data) => (dispatch) => {
    dispatch(setLoading());

    dispatch({
        type: CREATE_USER,
        payload: data
      })
}

export const setLoading = () => {
  return { 
      type: SET_LOADING
  }
}
