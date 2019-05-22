import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUserInfo } from '../actions/CreateLoginActions';
import PlayerDetail from '../components/PlayerDetail';


class PlayerDetailContainer extends Component {

  componentDidMount() {
    this.props.getUserInfo(this.props.user)
  }


  render() {
    return (
      <div>
        <PlayerDetail />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    loading: state.LoginSignUp.loading,
    user: state.LoginSignUp.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: (data) => dispatch(getUserInfo(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerDetailContainer);
