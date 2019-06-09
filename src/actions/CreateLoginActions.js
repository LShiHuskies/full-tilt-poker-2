import axios from 'axios';

export const SET_LOADING = 'SET_LOADING';
export const SET_PLAYER_LOADING = 'SET_PLAYER_LOADING';
export const USER_CREATED = 'USER_CREATED';
export const USER_LOGGEDIN = 'USER_LOGGEDIN';
export const USER_INFO = 'USER_INFO';
export const SET_USER_INFO = 'SET_USER_INFO';

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
  debugger;
    return {
      type: USER_LOGGEDIN,
      payload: data
    }
}

export const getUserInfo = (data) => (dispatch) => {
  dispatch(setLoading());

  try {
    const config = { headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    }
    axios.get(`http://localhost:3000/api/users/${data.id}`, config)
        .then(response => {
          dispatch(setUserInfo(response.data));
        })
  } catch (error) {
    console.error(error)
  }
}

export const setPlayerLoading = () => {
  return {
    type: SET_PLAYER_LOADING,
  }
}

export const setUserInfo = (data) => {
  return {
      type: SET_USER_INFO,
      payload: data
  }
}