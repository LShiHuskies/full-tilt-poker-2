import React, { Component } from 'react';
import { connect } from 'react-redux';


import GameRoom from '../components/GameRoom';

import { chooseGameRoom } from '../actions/GameActions';


class GameRoomContainer extends Component {
  componentDidMount() {
    const { params } = this.props.match;
    this.props.chooseGameRoom(params.id)
  }
  render() {
    console.log(this.props.chosenGameRoom);
    return (
      <div>
        <GameRoom />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    chosenGameRoom: state.GameReducer.chosenGameRoom
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    chooseGameRoom: (id) => dispatch(chooseGameRoom(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameRoomContainer);
