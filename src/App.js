import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/ABOUT/About";
import Dashboard from "./components/DASHBOARD/Dashboard";
import Home from "./components/HOME/Home";
import Notfound from "./components/NOTFOUND/Notfound";
import "./App.css";

// history.replace: from page3 to page1,
// history.goBack: come back 1 page <==> history.go(-1),
// history.goForward(): go to 1 page <==> history.go(1)

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
