import axios from 'axios';

export const SET_LOADING = 'SET_LOADING';
export const USER_CREATED = 'USER_CREATED';
export const USER_LOGGEDIN = 'USER_LOGGEDIN';

export const createUser = (data) => (dispatch) => {
    dispatch(setLoading());

    try {
        axios.post('http://localhost:3000/api/users', data)
            .then(response => dispatch(userCreated(response.data)))
      } catch (error) {
        console.error(error)
    }
}

export const setLoading = () => {
  return { 
      type: SET_LOADING
  }
}

export const userCreated = (data) => {
    return {
        type: USER_CREATED,
        payload: data
    }
}

export const loginUser = (data) => (dispatch) => {
  dispatch(setLoading());

    try {
        axios.post('http://localhost:3000/api/sessions', data)
            .then(response => dispatch(userLoggedIn(response.data)))
    } catch (error) {
        console.error(error)
  }
}

export const userLoggedIn = (data) => {
    return {
      type: USER_LOGGEDIN,
      payload: data
    }
}