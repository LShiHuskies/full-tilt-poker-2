import React, { Component } from 'react';
import { connect } from 'react-redux';




class MainLobby extends Component {
  render() {
    return (
      <div>
          Hello
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
      state
  }
}

export default connect(mapStateToProps)(MainLobby);
