import React from "react";
import '../App.js'

class Artist extends React.Component {
  render() {
    return (
      <div>
        <p style={{textAlign: 'center'}}>{this.props.header.artistName}</p>
        <img src={this.props.header.artistUrl}/>
        <p></p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/knj36fq2Y5w" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    );
  }
}

export default Artist;
