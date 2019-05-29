import { SET_LOADING, LISTED_GAMES, SET_CHOOSE_GAME_LOADING, CHOSEN_GAME_ROOM } from '../actions/GameActions';

const defaultState = {
    style: 'ringGame',
    loading: false,
    chooseGameLoading: false,
    listgames: [],
    chosenGameRoom: null,
    defaultCardBack: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBSevncA2heKowUFZb8QoNnY1H5TNRwnfjeR2jWQ2YwSPhUGE4'
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

        case SET_CHOOSE_GAME_LOADING:

          return {
             ...state,
             chooseGameLoading: true
          }

        case CHOSEN_GAME_ROOM:

          return {
              ...state,
              chosenGameRoom: action.payload
          }

        default:
          return {
              ...state
          }
    }
}