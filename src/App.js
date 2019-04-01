import React, { Component } from "react";
import Header from './Components/Header.js'
import "./App.css";

class App extends Component {
  render() {
    const header = {
      header: 'FIRST REACT WEBSITE HELLOOOOOO WORLD⭐️'
    }
    
    return <Header header={header}/>;
  }
}

export default App;
