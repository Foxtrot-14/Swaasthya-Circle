import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Activities from "./components/pages/Activities";
import Volunteer from "./components/pages/Volunteer";
import SideBar from "./components/SideBar";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" exact Component={About} />
          <Route path="/activities" exact Component={Activities} />
          <Route path="/contribute" exact Component={Volunteer} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
