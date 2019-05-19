import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignUp from '../components/SignUp';
import Login from '../components/Login';
import '../App.css';

import { createUser } from '../actions/CreateLoginActions';

class App extends Component {
  state = {
    signUp: true
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
    this.props.createUser(values)
  }
  render() {
    return (
      <div className="App" style={{
        background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqoEs6h9_A_YPYz4wunHTS5kzoqByBhJ4bGJeWMpS_va9W4tJ3)',
        backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'absolute', width: '100%', height: '100%' }}>
        { this.state.signUp
        ? <SignUp handleSubmit={this.handleSubmit} handleLogin={this.handleSignUp} />
        : <Login handleSubmit={() => console.log('hi')} handleSignUp={this.handleSignUp} /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (data) => dispatch(createUser(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
