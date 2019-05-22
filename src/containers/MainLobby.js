import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardContent } from '@material-ui/core/';
import ReactTable from 'react-table';

import PlayerDetailContainer from './PlayerDetailContainer';




class MainLobby extends Component {
  render() {
    return (
      <div className="App" id="MainLobby">
        <img src='http://www.poker10.com/upload/Image/news-big/ivey-dwan-antonius-subir.jpg' alt="none" style={{ float: 'left', width: '20%', height: '20%' }} />
        <span>
        <Card style={{ width: '60%', height: '20%' }}>
            <div style={{ height: '33%' }}>Ring Game</div>
            <div style={{ height: '33%' }}>Sit & Go</div>
            <div style={{ height: '33%' }}>Heads Up</div>
        </Card>
        <div style={{ position: 'absolute', top: '0', right: '0', width: '20%', height: '20%' }} >
            <PlayerDetailContainer />
        </div>
        </span>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
      user: state.LoginSignUp.user
  }
}

export default connect(mapStateToProps)(MainLobby);
