import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./navbar.js";

function Landing() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <body className="mBody">
        <h1>Mahjong Mastery Site</h1>
        <h3>
          Welcome to the Mahjong Mastery site! Here you will learn how to play
          Mahjong with Mahjong Competition Rules. Click below to get started, or
          keep reading to learn more about the game. Use the navigation bar on
          the left to bounce around sections.
        </h3>
        <Link
          className="centered"
          style={{ textDecoration: "none" }}
          to="/tiles"
        >
          <button className="hollowButton">GET STARTED</button>
        </Link>
        <div className="faq">
          <div className="faq1">
            <h2>What is Mahjong?</h2>
            <p>
              Mahjong is a tile-based game that was developed in the 19th
              century in China and has spread throughout the world since the
              early 20th century. The game and its regional variants are widely
              played throughout Eastern and South Eastern Asia and have also
              become popular in Western countries. Similar to the Western card
              game rummy, Mahjong is a game of skill, strategy, and luck.
            </p>
          </div>
          <div className="faq1">
            <h2>What are Mahjong Competition Rules?</h2>
            <p>
              There are many different variations of Mahjong rules from
              different countries, locales, and cultures. Mahjong Competition
              Rules are those followed in official Chinese Mahjong tournaments.
              This is the official ruleset of Chinese mahjong.
            </p>
          </div>
          <div className="faq1">
            <h2>What do I need to play?</h2>
            <p>
              Mahjong requires exactly four players and one mahjong set. You
              will be well served to sit at a square table. Other than that,
              nothing else is required! You may enjoy the game.
            </p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Landing;
