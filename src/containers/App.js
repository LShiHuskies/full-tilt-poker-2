import React from 'react';
import { connect } from 'react-redux';


import SignUp from '../components/SignUp';
import '../App.css';

function App() {
  return (
    <div className="App" style={{
      background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqoEs6h9_A_YPYz4wunHTS5kzoqByBhJ4bGJeWMpS_va9W4tJ3)',
      backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'absolute', width: '100%', height: '100%' }}>
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
