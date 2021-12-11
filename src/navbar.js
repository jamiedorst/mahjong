import "./App.css";
import { NavLink } from "react-router-dom";
import React, { Component } from "react";

const flex = "flex";
const none = "none";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: false,
    };
  }

  // handle collapsing navbar
  collapse = () => {
    this.setState({
      nav: !this.state.nav,
    });
  };

  render() {
    return (
      <div>
        {/* set classes to show/hide navbar */}
        <nav className="sideNav" id={this.state.nav ? flex : none}>
          <ul className="navUL" id={this.state.nav ? flex : none}>
            <li>
              <h2>
                <NavLink
                  className="navItem"
                  activeClassName="currentPage" // underline current page
                  exact
                  to="/"
                >
                  Home
                </NavLink>
              </h2>
            </li>
            <div className="navGroup">
              <li>
                <h2>Learn</h2>
              </li>
              <li>
                <p>
                  <NavLink
                    className="navItem"
                    activeClassName="currentPage"
                    to="/tiles"
                  >
                    Mahjong Tiles
                  </NavLink>
                </p>
              </li>
              <li>
                <p>
                  <NavLink
                    className="navItem"
                    activeClassName="currentPage"
                    to="/setup"
                  >
                    Game Setup
                  </NavLink>
                </p>
              </li>
              <li>
                <p>
                  <NavLink
                    className="navItem"
                    activeClassName="currentPage"
                    to="/sets"
                  >
                    Types of Sets
                  </NavLink>
                </p>
              </li>
              <li>
                <p>
                  <NavLink
                    className="navItem"
                    activeClassName="currentPage"
                    to="/gameplay"
                  >
                    Gameplay
                  </NavLink>
                </p>
              </li>
              <li>
                <p>
                  <NavLink
                    className="navItem"
                    activeClassName="currentPage"
                    to="/winning"
                  >
                    Winning
                  </NavLink>
                </p>
              </li>
            </div>
            <div className="navGroup">
              <li>
                <h2>Resources</h2>
              </li>
              <li>
                <p>
                  <NavLink
                    className="navItem"
                    activeClassName="currentPage"
                    to="/fan"
                  >
                    Fan Guide
                  </NavLink>
                </p>
              </li>
              <li>
                <p>
                  <NavLink
                    className="navItem"
                    activeClassName="currentPage"
                    to="/printout"
                  >
                    Printable Guide
                  </NavLink>
                </p>
              </li>
              <li>
                <p>
                  <NavLink
                    className="navItem"
                    activeClassName="currentPage"
                    to="/quiz"
                  >
                    Fan Quiz
                  </NavLink>
                </p>
              </li>
            </div>
          </ul>
        </nav>
        {/* hamburger menu appears when screen is small enough
            control navbar by click */}
        <div id="bun" onClick={() => this.collapse()}>
          <hr className="burg" />
          <hr className="burg" />
          <hr className="burg" />
        </div>
      </div>
    );
  }
}

export default Navbar;
