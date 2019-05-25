import { SET_LOADING, LISTED_GAMES } from '../actions/GameActions';

const defaultState = {
    style: 'ringGame',
    loading: false,
    listgames: []
  }

  export default function LoginOrSignUp(state = defaultState, action) {
    switch(action.type) {

        case SET_LOADING:

          return {
              ...state,
              loading: true,
          }

        case LISTED_GAMES:

          return {
              ...state,
              listgames: action.payload,
              loading: false
          }

        default:
          return {
              ...state
          }
    }
}