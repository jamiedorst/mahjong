import "./App.css";
import Navbar from "./navbar.js";
import preview from "./Assets/download/preview.png";
import guide from "./Assets/download/Guide.pdf";

function Print() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <body className="mBody">
        <h1>Printable Fan Guide</h1>
        <h3>
          Download and print this 4-page guide so you can have it handy when you
          play!
        </h3>
        <img
          className="preview"
          src={preview}
          alt="Preview of printable Mahjong guide"
        />
        <a
          href={guide}
          style={{ textDecoration: "none" }}
          download="Guide"
          target="_blank"
          rel="noreferrer"
          className="centered"
        >
          <button className="hollowButton">DOWNLOAD PRINTABLE GUIDE</button>
        </a>
      </body>
    </div>
  );
}

export default Print;
