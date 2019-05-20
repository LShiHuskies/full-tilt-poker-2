import { SET_LOADING, USER_CREATED } from '../actions/CreateLoginActions';

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

        default:

          return {
              ...state
          }
    }
}