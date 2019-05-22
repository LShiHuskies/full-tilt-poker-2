import React, { Component } from 'react';
import { connect } from 'react-redux';


import PlayerDetail from '../components/PlayerDetail';


class PlayerDetailContainer extends Component {
  render() {
    return (
      <div>
        <PlayerDetail />
      </div>
    )
  }
};

export default connect(null)(PlayerDetailContainer);
