import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardContent } from '@material-ui/core/';
import ReactTable from 'react-table';




class MainLobby extends Component {
  render() {
    return (
      <div className="App" id="MainLobby">
      <Card style={{ width: '30%', margin: '1% auto', backgroundColor: 'lightblue' }}>
        <CardContent>
          Welcome {this.props.user.name || this.props.user.username}
        </CardContent>
      </Card>
          Hello
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
