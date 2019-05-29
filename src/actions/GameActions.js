import axios from 'axios';

export const SET_LOADING = 'SET_LOADING';
export const SET_CHOOSE_GAME_LOADING = 'SET_CHOOSE_GAME_LOADING';
export const LISTED_GAMES = 'LISTED_GAMES';
export const CHOSEN_GAME_ROOM = 'CHOSEN_GAME_ROOM';

export const setLoading = () => {
    return { 
        type: SET_LOADING
    }
}

export const setChooseGameLoading = () => {
    return {
        type: SET_CHOOSE_GAME_LOADING
    }
}

export const getStyleOfGame = (data) => (dispatch) => {

dispatch(setLoading());

    try {
        const config = { headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            'Authorization': localStorage.getItem('token')
          },
          params: {
            style: data
          }
        }
        axios.get(`http://localhost:3000/api/game_rooms`, config)
            .then(response => {
              dispatch(listGames(response.data));
            })
      } catch (error) {
        console.error(error)
      }
}

export const listGames = (data) => {
  return {
      type: LISTED_GAMES,
      payload: data
  }
}

export const chooseGameRoom = (id) => (dispatch) => {
  
    dispatch(setChooseGameLoading());

    try {
        const config = { headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            'Authorization': localStorage.getItem('token')
          },
        }
        axios.get(`http://localhost:3000/api/game_rooms/${id}`, config)
            .then(response => {
                dispatch(setChosenGameRoom(response.data))
            })
      } catch (error) {
        console.error(error)
      }
}

export const setChosenGameRoom = (data) => {
  return {
      type: CHOSEN_GAME_ROOM,
      payload: data
  }
}

export const getCards = (deckID) => (dispatch) => {
    try {
        axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`)
            .then(response => {
                debugger;
            })
      } catch (error) {
        console.error(error)
      }
}