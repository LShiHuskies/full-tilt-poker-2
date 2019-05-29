import React, { Component } from 'react';

import Deck from "react-poker";
// import "react-poker/styles.css"
import axios from 'axios';



class GameRoom extends Component {

  constructor(props) {
    super(props);

    this.state = {
      player: 'http://www.directoryonlinepoker.com/images/linux250x264.gif',
      empty: 'http://blogs.rrc.ca/wellness/wp-content/uploads/2014/03/easy-button.png',
      dealer: 'https://www.pokerstore.nl/media/catalog/product/cache/5/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/p/o/poker_dealer_puck_1.png'
    }
  }
  componentDidMount() {
      // try {
      // axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      //   .then(response => console.log(response));
      // } catch(error) {
      //     console.log(error);
      // }
  }


  render() {

    return (
      <div style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat' , backgroundImage: "url(http://casinoglobalclub.com/wp-content/uploads/2017/03/cf8fbf0f6c10451f5ad6fcb83f49276c.jpg)", width: '100%', height: '750px' }}>
        {/* <img src="http://casinoglobalclub.com/wp-content/uploads/2017/03/cf8fbf0f6c10451f5ad6fcb83f49276c.jpg" style={{ width: '100%' }} /> */}
        {/* <img src={this.state.empty} alt="empty" /> */}
        <img src={this.state.empty} alt="Sit Down" />
      </div>
    );
  }
}

export default GameRoom;
