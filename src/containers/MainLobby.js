import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button } from '@material-ui/core/';

import PlayerDetailContainer from './PlayerDetailContainer';
import GameList from './GameList';
import { getStyleOfGame } from '../actions/GameActions';

import GameRoomContainer from './GameRoomContainer';




class MainLobby extends Component {

  handleStyle = (style) => {
    this.props.getStyleOfGame(style);
  }
  render() {
    return (
      <div className="App" id="MainLobby">
        <img src='http://www.poker10.com/upload/Image/news-big/ivey-dwan-antonius-subir.jpg' alt="none" style={{ float: 'left', width: '20%', height: '20%' }} />
        <span>
        <Card style={{ width: '60%', height: '20%', backgroundColor: 'transparent', border: 'none' }}>
            <Button color="primary" fullWidth style={{ height: '33%', backgroundColor: 'lightGray' }} onClick={() => this.handleStyle("ringGame")}>Ring Game</Button>
            <Button color="primary" fullWidth style={{ height: '33%', backgroundColor: 'lightGray' }} onClick={() => this.handleStyle("sitNGo")}>Sit & Go</Button>
            <Button color="primary" fullWidth style={{ height: '33%', backgroundColor: 'lightGray' }}onClick={() => this.handleStyle("headsUp")}>Heads Up</Button>
        </Card>
        <div style={{ position: 'absolute', top: '0', right: '0', width: '20%', height: '20%' }} >
            <PlayerDetailContainer />
        </div>
        </span>
        {/* <GameRoomContainer /> */}
        <GameList />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
      user: state.LoginSignUp.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStyleOfGame: (data) => dispatch(getStyleOfGame(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLobby);
