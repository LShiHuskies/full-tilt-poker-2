import axios from 'axios';

export const SET_LOADING = 'SET_LOADING';
export const LISTED_GAMES = 'LISTED_GAMES';

export const setLoading = () => {
    return { 
        type: SET_LOADING
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
        axios.get(`http://localhost:3002/api/game_rooms`, config)
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
