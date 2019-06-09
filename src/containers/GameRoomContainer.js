import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


import GameRoom from '../components/GameRoom';

import { chooseGameRoom, getCards } from '../actions/GameActions';
import { userLoggedIn } from '../actions/CreateLoginActions';


class GameRoomContainer extends Component {
  componentDidMount() {
    const { params } = this.props.match;
    this.props.chooseGameRoom(params.id);
    if(!!localStorage.getItem('token')){
      const user = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
      this.props.userLoggedIn(user);
    }
  }

  handleClick = () => {
    this.props.getCards(this.props.chosenGameRoom.deck)

  }

  handleQuickly = () => {
    try {
      axios.get(`https://deckofcardsapi.com/api/deck/${this.props.chosenGameRoom.deck}/shuffle/`)
          .then(response => {
              debugger;
          })
    } catch (error) {
      console.error(error)
    }

  }
  render() {
    return (
      <div>
        <GameRoom
          user={this.props.user}
        />
        <button onClick={this.handleClick}>hello</button>
        <button onClick={this.handleQuickly}>Do a quick reshuffle</button>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    chosenGameRoom: state.GameReducer.chosenGameRoom,
    user: state.LoginSignUp.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    chooseGameRoom: (id) => dispatch(chooseGameRoom(id)),
    getCards: (deckId) => dispatch(getCards(deckId)),
    userLoggedIn: (data) => dispatch(userLoggedIn(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameRoomContainer);
