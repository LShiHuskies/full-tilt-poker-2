import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core/';
import ReactTable from 'react-table';



import { getStyleOfGame } from '../actions/GameActions';

class GameList extends Component {

  componentDidMount() {
    const { getStyleOfGame, style } = this.props;
    getStyleOfGame(style);
  }

  render() {
    const { loading } = this.props;
    if (loading) {
      return <CircularProgress />
    }
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
      style: state.GameReducer.style,
      loading: state.GameReducer.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStyleOfGame: (data) => dispatch(getStyleOfGame(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameList);