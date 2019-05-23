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
      <div style={{ left: "10vw", top: "10vh", position: "absolute" }}>
        <button
          style={{ padding: "1.5em", margin: "2em" }}
        >
          Deal
        </button>
        <Deck
          board={["3s", "Qh", "As"]}
          boardXoffset={375} // X axis pixel offset for dealing board
          boardYoffset={200} // Y axis pixel offset for dealing board
          size={200} // card height in pixels
        />
      </div>
    );
  }
}

export default GameRoom;