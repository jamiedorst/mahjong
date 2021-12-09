import "./App.css";
import down from "./Assets/setup/down4.png";
import table from "./Assets/setup/table.png";
import Navbar from "./navbar.js";
import { Link } from "react-router-dom";

function Setup() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <body className="mBody">
        <h1>Game Setup</h1>
        <h3>
          The set up for Mahjong is highly calcuated. There are a few main steps
          to go through before you may start playing a game.
        </h3>
        <div className="faq1">
          <h2>Determining Seating</h2>
          <p>
            The four wind tiles should be placed face down in the center of the
            table.
          </p>
          <img
            className="allImg"
            src={down}
            alt="Four facedown mahjong tiles"
          ></img>
          <p>
            Each player will pick a tile at random, and that tile will indicate
            their seat at the table. The Mahjong table should be a square with
            each side representing a wind direction. Mahjong follows the
            customary order of Chinese cardinal directions: East, South, West,
            then North, in counterclockwise direction.
          </p>
          <img
            className="specialImg"
            src={table}
            alt="Mahjong table setup with four winds at each seat"
          ></img>
        </div>
        <div className="faq1">
          <h2>Building the Wall</h2>
          <p>
            All 144 tiles (including flower tiles) are mixed face down in the
            center of the table. Each player then takes 36 tiles and arranges
            them face down in a row of 18 tiles wide, 2 tiles tall. All players
            then push their rows toward the center of the table to form a hollow
            square.
          </p>
        </div>
        <div className="faq1">
          <h2>Breaking the Wall</h2>
          <p>
            To determine who will break the wall, the East player throws both
            dice and, starting with themselves, counts counterclockwise until
            they land on a player. This player throws both dice again, and
            counts along their side of the wall starting on the right side. The
            wall is broken (tiles are offset) starting directly to the left of
            this point.
          </p>
        </div>
        <div className="faq1">
          <h2>Dealing</h2>
          <p>
            East starts the deal by taking the first 2 stacks (4 tiles total) to
            the left of the break. The other players go around in
            counterclockwise order taking 2 stacks at a time at the same side of
            the break. This is repeated until each player has 12 tiles. East
            then takes the next stack (2 tiles) to end up with 14 tiles, and the
            remaining players take one tile each to end up with 13 tiles.
          </p>
        </div>
        <div className="faq1">
          <h2>Tile Replacements</h2>
          <p>
            If any player’s hand contains flower tiles, they are immediately
            removed from the hand and placed face up (but still kept by the
            player). The player then takes extra tiles to replace them from the
            opposite side of the wall.
          </p>
        </div>
        <div className="buttons">
          <Link style={{ textDecoration: "none" }} to="/tiles">
            <button className="filledButton">BACK</button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/sets">
            <button className="filledButton">NEXT</button>
          </Link>
        </div>
      </body>
    </div>
  );
}

export default Setup;
