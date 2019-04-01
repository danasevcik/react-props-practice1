import React, { Component } from "react";
import Header from './Components/Header.js'
import Artist from './Components/Artist.js'
import "./App.css";

class App extends Component {
  render() {
    const header = {
      header: 'FIRST REACT WEBSITE HELLOOOOOO WORLD⭐️',
      artistName: 'Favorite Artist: Leon Bridges',
      artistUrl: 'https://pbs.twimg.com/profile_images/974631762570678272/B5jgrb7c_400x400.jpg',
      artistFaveSong: 'https://www.youtube.com/watch?v=knj36fq2Y5w',
    }

    return (
      <div>
        <Header header={header}/>
        <Artist header={header}/>
      </div>
    );

  }
}

export default App;
