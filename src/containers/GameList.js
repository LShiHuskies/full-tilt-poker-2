import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { setUserInfo } from '../actions/CreateLoginActions';

class GameList extends Component {

  componentDidMount() {
    try {
      const config = { headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json',
          'Authorization': localStorage.getItem('token')
        },
        params: {
          style: 'ringGame'
        }
      }
      axios.get(`http://localhost:3002/api/game_rooms`, config)
          .then(response => {
            // this.props.dispatch(setUserInfo(response.data));
          })
    } catch (error) {
      console.error(error)
    }
  }
  render() {
    return (
      <div>
          hello
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(null, mapDispatchToProps)(GameList);