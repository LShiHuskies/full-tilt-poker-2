import { SET_LOADING, USER_CREATED, USER_LOGGEDIN } from '../actions/CreateLoginActions';

const defaultState = {
  user: null,
  loading: false,
}

export default function LoginOrSignUp(state = defaultState, action) {
    switch(action.type) {

        case SET_LOADING:

          return {
              ...state,
              loading: true,
          }

        case USER_CREATED:

          return {
              ...state,
              user: action.payload,
              loading: false,
          }

        case USER_LOGGEDIN:
        if(!localStorage.getItem('token')){
          localStorage.setItem('token', action.payload.token)
        }
          return {
            ...state,
            user: action.payload,
            loading: false
          }

        default:

          return {
              ...state
          }
    }
}