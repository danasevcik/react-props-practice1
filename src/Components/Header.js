import React from "react";
import '../App.js'

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>{this.props.header.header}</h1>
      </div>
    );
  }
}

export default Header;
