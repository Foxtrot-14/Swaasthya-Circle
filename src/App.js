import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Activities from "./components/pages/Activities";
import Volunteer from "./components/pages/Volunteer";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" exact Component={About} />
          <Route path="/activities" exact Component={Activities} />
          <Route path="/volunteer" exact Component={Volunteer} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
