import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./utils/privateRoute";
import './App.css';
import Login from "./components/login";
import MainScreen from "./components/mainScreen";
import PlayScreen from "./components/playScreen";
import TwoPlayerScreen from "./components/twoPlayerScreen";
import Registration from "./components/registration";
import Context from "./contexts/loginContext";
import Users from "./components/Users";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(localStorage.getItem("hs"));

  return (
    <Router>
      <div className="mainApp">
        <Switch>
          <Context.Provider value={{ setLoggedIn, loggedIn, setLoggedIn, credentials, setCredentials, level, setLevel, score, setScore, highScore, setHighScore }}>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Registration} />
            <Route exact path="/users" component={Users} />
            <PrivateRoute exact path="/main-screen" component={MainScreen} />
            <PrivateRoute exact path="/play-screen" component={PlayScreen} />
            <PrivateRoute exact path="/two-player-screen" component={TwoPlayerScreen} />
          </Context.Provider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
