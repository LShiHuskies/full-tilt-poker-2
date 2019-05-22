import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core/';

import { getUserInfo } from '../actions/CreateLoginActions';
import PlayerDetail from '../components/PlayerDetail';


class PlayerDetailContainer extends Component {
  componentDidMount() {
    this.props.getUserInfo(this.props.user)
  }


  render() {
    const { user, playerLoading } = this.props;
    if (playerLoading) {
      return (
        <CircularProgress />
      )
    }
    return (
      <PlayerDetail user={user} />
    )
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.LoginSignUp.user,
    playerLoading: state.LoginSignUp.playerLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: (data) => dispatch(getUserInfo(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerDetailContainer);
