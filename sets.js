import "./App.css";
import bC from "./Assets/sets/bC.png";
import cC from "./Assets/sets/cC.png";
import dC from "./Assets/sets/dC.png";
import bP from "./Assets/sets/bP.png";
import cP from "./Assets/sets/cP.png";
import dP from "./Assets/sets/dP.png";
import cK from "./Assets/sets/cK.png";
import dK from "./Assets/sets/dK.png";
import bPa from "./Assets/sets/bPa.png";
import dPa from "./Assets/sets/dPa.png";
import cPa from "./Assets/sets/cPa.png";
import gaPa from "./Assets/sets/gaPa.png";
import Navbar from "./navbar.js";
import { Link } from "react-router-dom";

function Tiles() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <body className="mBody">
        <h1>Types of Sets</h1>
        <h3>
          There are three types of sets that will form your full mahjong hand.
          Sets are composed of three or four tiles fulfilling certain
          parameters.
        </h3>
        <div className="faq1">
          <h2>Chow</h2>
          <p>
            A chow is a set of three tiles of the same suit in sequence. Chows
            can only be formed using suited tiles, since they require numerical
            values.
          </p>
          <h4>Examples</h4>
          <div className="imgSet">
            <img
              className="allImg"
              src={bC}
              alt="Bamboo tiles 2, 3, and 4"
            ></img>
            <img
              className="allImg"
              src={cC}
              alt="Character tiles 7, 8, and 9"
            ></img>
            <img
              className="allImg"
              src={dC}
              alt="Mahjong tiles of suit bamboo 1-9"
            ></img>
          </div>
        </div>
        <div className="faq1">
          <h2>Pung</h2>
          <p>
            A pung is a set of three identical tiles. Pungs can be formed using
            suited tiles or honor tiles.
          </p>
          <h4>Examples</h4>
          <div className="imgSet">
            <img
              className="allImg"
              src={bP}
              alt="Three bamboo tiles of 3"
            ></img>
            <img
              className="allImg"
              src={cP}
              alt="Three character tiles of 9"
            ></img>
            <img
              className="allImg"
              src={dP}
              alt="Three green dragon tiles"
            ></img>
          </div>
        </div>
        <div className="faq1">
          <h2>Kong</h2>
          <p>
            A pung is a set of four identical tiles. Kongs can be formed using
            suited tiles or honor tiles.
          </p>
          <h4>Examples</h4>
          <div className="imgSet">
            <img
              className="allImg"
              src={cK}
              alt="Four character tiles of 9"
            ></img>
            <img
              className="allImg"
              src={dK}
              alt="Four green dragon tiles"
            ></img>
          </div>
        </div>
        <div className="faq1">
          <h2>Pair</h2>
          <p>
            A pair is a set of two identical tiles. Pairs are typically only
            allowed once in a hand, and can be formed using suited tiles or
            honor tiles.
          </p>
          <h4>Examples</h4>
          <div className="imgSet">
            <img
              className="allImg"
              src={cPa}
              alt="Two character tiles of 9"
            ></img>
            <img className="allImg" src={bPa} alt="Two bamboo tiles of 3"></img>
            <img className="allImg" src={dPa} alt="Two dots tiles of 5"></img>
            <img
              className="allImg"
              src={gaPa}
              alt="Two green dragon tiles"
            ></img>
          </div>
        </div>
        <div className="buttons">
          <Link style={{ textDecoration: "none" }} to="/setup">
            <button className="filledButton">BACK</button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/gameplay">
            <button className="filledButton">NEXT</button>
          </Link>
        </div>
      </body>
    </div>
  );
}

export default Tiles;
