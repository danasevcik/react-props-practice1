import React from "react";
import '../App.js'

class Header extends React.Component {
  render() {
    return <h1>{this.props.header.header}</h1>;
  }
}

export default Header;
