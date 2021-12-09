import "./App.css";
import Navbar from "./navbar.js";
import { Link } from "react-router-dom";

function Winning() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <body className="mBody">
        <h1>Winning</h1>
        <h3>
          Winning a round of MCR Mahjong is more complicated than simply
          completing your hand with sets. You must always be considering
          strategy.
        </h3>
        <div className="faq1">
          <h2>Requirements</h2>
          <p>
            In order to win, your hand must be worth at least 8 points,
            determined by Fan. If your hand has less than 8 points and you
            declare mahjong, you are disqualified from winning the round. View
            the pages under the Resources tab to learn more about Fan.
          </p>
        </div>
        <div className="faq1">
          <h2>Scoring</h2>
          <p>
            Even if multiple fan apply to a given hand, their point values may
            not necessarily add up directly. To count points correctly, arrange
            tiles in one orientation and add fan that are applicable without
            reordering. A set may not be used for the same fan twice in one
            hand. A set may not be used for more than two different fan in one
            hand. Pungs may count as kongs in some fan, but kongs are never
            counted as pungs. Fan that are implied by a greater fan do not get
            additionally counted (refer to exclusions to bypass this rule)
          </p>
        </div>
        <div className="faq1">
          <h2>Points</h2>
          <p>
            Each player pays 8 points to the winner. If the round was won on a
            discard, the player who discarded the winning tile must also pay the
            winner the value of the winning hand. If the round was won on
            self-draw, each other player must pay the winner the value of the
            winning hand.
          </p>
        </div>
        <div className="faq1">
          <h2>Rounds</h2>
          <p>
            In Mahjong, there are 4 rounds represented by winds. Within each
            round, the seating position rotates 4 times (a total of 16 games
            within a game of Mahjong). The game round starts on East, and
            rotates counterclockwise ending on North. The players’ seats also
            exchange E &#8596; S, W &#8596; N; E &#8596; N, W &#8596; S; E
            &#8596; S, W &#8596; N. Rotation happens even when no one wins,
            which may happen if all tiles run out before a Mahjong. The player
            with the most points at the end of all 16 games wins.
          </p>
        </div>

        <div className="buttons">
          <Link style={{ textDecoration: "none" }} to="/gameplay">
            <button className="filledButton">BACK</button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/fan">
            <button className="filledButton">VIEW RESOURCES</button>
          </Link>
        </div>
      </body>
    </div>
  );
}

export default Winning;
