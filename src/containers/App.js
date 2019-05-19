import React from 'react';
import { connect } from 'react-redux';


import SignUp from '../components/SignUp';
import '../App.css';

function App() {
  return (
    <div className="App">
      <SignUp handleSubmit={console.log('hi')} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
