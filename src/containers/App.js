import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignUp from '../components/SignUp';
import Login from '../components/Login';
import MainLobby from './MainLobby';
import '../App.css';

import { createUser, loginUser, userLoggedIn } from '../actions/CreateLoginActions';

class App extends Component {
  state = {
    signUp: true
  }

  componentDidMount() {
    if(!!localStorage.getItem('token')){
      const user = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
      this.props.userLoggedIn(user);
    }
  }

  handleSignUp = () => {
    if (this.state.signUp) {
      this.setState({
        signUp: false
      });
    } else {
      this.setState({
        signUp: true
      });
    }
  }

  handleSubmit = (values) => {
    this.props.createUser(values);
  }

  handleLogin = (values) => {
    this.props.loginUser(values);
  }

  render() {
    return (
      <div>
        { !this.props.user ? <div className="App" id="AppWorld">
        { this.state.signUp ? <SignUp handleSubmit={this.handleSubmit} handleLogin={this.handleSignUp} />
          : <Login handleSubmit={this.handleLogin} handleSignUp={this.handleSignUp} /> }
         </div> :
        <MainLobby /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user, loading } = state.LoginSignUp;
  return {
    user,
    loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (data) => dispatch(createUser(data)),
    loginUser: (data) => dispatch(loginUser(data)),
    userLoggedIn: (data) => dispatch(userLoggedIn(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
