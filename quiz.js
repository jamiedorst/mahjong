import "./App.css";
import Navbar from "./navbar.js";
import React, { Component } from "react";

class Quiz extends Component {
  render() {
    return (
      <div>
        <header>
          <Navbar />
        </header>
        <body className="mBody">
          <h1>Fan Quiz</h1>
          <h3>
            Practice recognizing fan by guessing how many points the displayed
            hand is worth.
          </h3>
          <p>
            Adjust the sliders and selections at the bottom to change the odds
            of various types of hands appearing.
          </p>
          <div
            className="frame"
            style={{
              overflow: "hidden",
              height: "65vh",
              width: "height*1.255",
            }}
          >
            <iframe
              src="https://mahjongsoft.com/mtweb.php"
              title="Website Page Title"
              className="embed"
              scrolling="no"
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                top: "-20px",
              }}
            ></iframe>
          </div>
        </body>
      </div>
    );
  }
}

export default Quiz;
