import axios from 'axios';

export const SET_LOADING = 'SET_LOADING';

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
        axios.get(`http://localhost:3000/api/game_rooms`, config)
            .then(response => {
              // this.props.dispatch(setUserInfo(response.data));
            })
      } catch (error) {
        console.error(error)
      }
}


