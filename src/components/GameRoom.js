import React, { Component } from 'react';

import Deck from "react-poker";
// import "react-poker/styles.css"
import axios from 'axios';



class GameRoom extends Component {
  componentDidMount() {
      try {
      axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(response => console.log(response));
      } catch(error) {
          console.log(error);
      }
  }

  render() {
    return (
      <div>
        <img src="http://casinoglobalclub.com/wp-content/uploads/2017/03/cf8fbf0f6c10451f5ad6fcb83f49276c.jpg" style={{ width: '100%' }} />
      </div>
    );
  }
}

export default GameRoom;