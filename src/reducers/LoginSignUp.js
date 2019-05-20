import { CREATE_USER, SET_LOADING } from '../actions/CreateLoginActions';

const defaultState = {
  user: null,
  loading: false,
}

export default function LoginOrSignUp(state = defaultState, action) {
    switch(action.type) {

        case SET_LOADING:
            debugger;
          return {
              ...state
          }


        case CREATE_USER:
            debugger;
          return {
            ...state,
            loading: false,
          };

        default:

          return {
              ...state
          }
    }
}