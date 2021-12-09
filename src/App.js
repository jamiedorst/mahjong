import "./App.css";
import Landing from "./landing.js";
import Tiles from "./tiles.js";
import Setup from "./setup.js";
import Sets from "./sets.js";
import Gameplay from "./gameplay.js";
import Winning from "./winning.js";
import Guide from "./guide.js";
import Print from "./printable.js";
import Quiz from "./quiz.js";
import ScrollToTop from "./scrollToTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div id="App">
      {/* router to link my pages together */}
      <Router>
        <ScrollToTop />
        <Switch>
          {/* learn pages */}
          <Route exact path="/tiles" component={Tiles} />
          <Route exact path="/setup" component={Setup} />
          <Route exact path="/sets" component={Sets} />
          <Route exact path="/gameplay" component={Gameplay} />
          <Route exact path="/winning" component={Winning} />
          {/* resource pages */}
          <Route exact path="/fan" component={Guide} />
          <Route exact path="/printout" component={Print} />
          <Route exact path="/quiz" component={Quiz} />
          {/* home page */}
          <Route exact path="/" component={Landing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
