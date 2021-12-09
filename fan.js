import "./App.css";
import React, { Component } from "react";

class Fan extends Component {
  render() {
    return (
      <div className="fan">
        <div className="fanText">
          <div className="starter">
            <h4 className="fanName">{this.props.name}</h4>
            <p>{this.props.description}</p>
          </div>
          <h6>{this.props.points}</h6>
        </div>
        <div className="fanTiles">
          {this.props.tiles.map((t) => (
            <img className="fanImg" src={t.img} alt={t.alt}></img>
          ))}
          <h5>{this.props.exclusions}</h5>
        </div>
      </div>
    );
  }
}

export default Fan;
