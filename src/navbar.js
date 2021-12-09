import "./App.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div id="sideNav">
      <ul id="navUL">
        <li>
          <h2>
            <NavLink
              className="navItem"
              activeClassName="currentPage"
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
    </div>
  );
}

export default Navbar;
