import "./App.css";
import bamboo from "./Assets/tiles/bambooAll.png";
import characters from "./Assets/tiles/charactersAll.png";
import dots from "./Assets/tiles/dotsAll.png";
import winds from "./Assets/tiles/windsAll.png";
import dragons from "./Assets/tiles/dragonsAll.png";
import flowers from "./Assets/tiles/flowersAll.png";
import Navbar from "./navbar.js";
import { Link } from "react-router-dom";

function Tiles() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <body className="mBody">
        <h1>Mahjong Tiles</h1>
        <h3>
          A Mahjong set contains 144 tiles, which contain 36 distinct types of
          pieces (4 of each kind). Each type of tile is used for a different
          purpose.
        </h3>
        <div className="faq1">
          <h2>Suited Tiles</h2>
          <p>
            There are 3 mahjong suits: bamboo, characters, and dots. Each suit
            contains tiles numbered 1-9. Tiles 1 and 9 are called terminals, and
            tiles 2-8 are called simples.
          </p>
          <h4>Bamboo</h4>
          <img
            className="allImg"
            src={bamboo}
            alt="Mahjong tiles of suit bamboo 1-9"
          ></img>
          <h4>Characters</h4>
          <img
            className="allImg"
            src={characters}
            alt="Mahjong tiles of suit characters 1-9"
          ></img>
          <h4>Dots</h4>
          <img
            className="allImg"
            src={dots}
            alt="Mahjong tiles of suit dots 1-9"
          ></img>
        </div>
        <div className="faq1">
          <h2>Honor Tiles</h2>
          <p>
            There are 2 types of honor tiles: winds and dragons. Wind tiles
            represent East, South, West, and North. There are three dragon
            tiles: red, green, and white.
          </p>
          <h4>Wind Tiles</h4>
          <img className="allImg" src={winds} alt="Mahjong wind tiles"></img>
          <h4>Dragon Tiles</h4>
          <img
            className="allImg"
            src={dragons}
            alt="Mahjong dragon tiles"
          ></img>
        </div>
        <div className="faq1">
          <h2>Flower Tiles</h2>
          <p>
            Flower tiles are composed of 4 flowers and 4 seasons. They serve as
            a sort of bonus tile, rather than a played tile.
          </p>
          <img
            className="allImg"
            src={flowers}
            alt="Mahjong flower tiles"
          ></img>
        </div>
        <div className="solo">
          <Link style={{ textDecoration: "none" }} to="/setup">
            <button className="filledButton">NEXT</button>
          </Link>
        </div>
      </body>
    </div>
  );
}

export default Tiles;
