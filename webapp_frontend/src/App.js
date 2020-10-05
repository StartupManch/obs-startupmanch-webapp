import React from "react";
import logo from "./startup-Manch-white.png";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./pages/SignUp/Signup";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
