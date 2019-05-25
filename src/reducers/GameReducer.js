import { SET_LOADING } from '../actions/GameActions';

const defaultState = {
    style: 'ringGame',
    loading: true,
  }

  export default function LoginOrSignUp(state = defaultState, action) {
    switch(action.type) {

        case SET_LOADING:

          return {
              ...state,
              loading: true,
          }

        default:

          return {
              ...state
          }
    }
}