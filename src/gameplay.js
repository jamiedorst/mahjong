import "./App.css";
import Navbar from "./navbar.js";
import { Link } from "react-router-dom";

function Gameplay() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <body className="mBody">
        <h1>Gameplay</h1>
        <h3>
          Mahjong gameplay is similar in some ways to rummy card games. Players
          take turns trying to create sets of tiles, aiming to create a full
          hand.
        </h3>
        <div className="faq1">
          <h2>Objective</h2>
          <p>
            Players compete to create chows, pungs, and kongs to form a full
            hand of 14 tiles. The first player to achieve a winning hand
            declares “Mahjong” and wins that round.
          </p>
        </div>
        <div className="faq1">
          <h2>Turn Taking</h2>
          <p>
            Players sit with 13 tiles, and draw a 14th tile on their turn. At
            the start of a new round, this is done while dealing. On your turn,
            you may either draw a tile from the wall or take the last discard.
            To take a discard from the discard pile, you must be able to form a
            set with that tile. At the end of your turn, you must discard a tile
            such that you have 13 tiles.
          </p>
        </div>
        <div className="faq1">
          <h2>Claiming Discards</h2>
          <p>
            Any player may claim a discard out of turn if they are forming a
            pung or kong. Only the player to the right of the discarder (the
            player whose turn is next) may claim the discard to form a chow. If
            two players wish to claim a discard, claim priority comes into
            effect: Hu (win) &#8594; kong &#8594; pung &#8594; chow. If two
            players wish to claim a tile for a Mahjong, the player whose turn
            would be next takes priority. Sets must be melded if a tile comes
            from a discard, while self-drawn sets may stay concealed. Melded
            sets are exposed and immutable. Discards may only be claimed to
            complete a pair unless to declare Mahjong.
          </p>
        </div>
        <div className="faq1">
          <h2>Kongs</h2>
          <p>
            If a player has a kong in their hand, they must draw an extra tile
            (per kong) to ensure the rest of the hand may be completed. When a
            kong is completed via discard, it is exposed as usual and the player
            draws an extra tile for their hand from the opposite side of the
            wall. If you have a pung in your hand and you draw the fourth tile
            from the wall, the kong may stay concealed. However, it should still
            be declared face down such that you have reason to draw an extra
            tile. If you have a melded pung and you draw the fourth tile from
            the wall, it may be added to the pung to create a kong (but it
            doesn’t need to be).
          </p>
        </div>
        <div className="faq1">
          <h2>Flower Tiles</h2>
          <p>
            If a flower tile is drawn during gameplay, it should be immediately
            exposed and the player should draw a replacement tile from the
            opposite side of the wall.
          </p>
        </div>
        <div className="buttons">
          <Link style={{ textDecoration: "none" }} to="/sets">
            <button className="filledButton">BACK</button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/winning">
            <button className="filledButton">NEXT</button>
          </Link>
        </div>
      </body>
    </div>
  );
}

export default Gameplay;
