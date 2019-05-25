import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';

class GameList extends Component {

  render() {
    return (
      <div>
          hello
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      user: state.LoginSignUp.user,
      style: state.GameReducer.style
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameList);