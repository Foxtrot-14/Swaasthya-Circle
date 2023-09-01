import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Activities from "./components/pages/Activities";
import SideBar from "./components/SideBar";
import Volunteer from "./components/pages/Volunteer";
import ActivityDetails from "./components/pages/ActivityDetails";
import Team from "./components/pages/Team";
function App() {
  return (
    <div className="App">
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" exact Component={About} />
          <Route path="/activities" exact Component={Activities} />
          <Route path="/contribute" exact Component={Volunteer} />
          <Route path="/team" exact Component={Team} />
          <Route path="/activitydetail" exact Component={ActivityDetails} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
