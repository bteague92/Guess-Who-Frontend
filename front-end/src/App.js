import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./utils/privateRoute";
import './App.css';
import { axiosWithAuth } from "./utils/axiosWithAuth";
import axios from "axios";
import Login from "./components/login";
import MainScreen from "./components/mainScreen";
import PlayScreen from "./components/playScreen";
import Registration from "./components/registration";
import LoginContext from "./contexts/loginContext";
import PlayerContext from "./contexts/playerContext";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <Router>
      <div className="mainApp">
        <Switch>
          <LoginContext.Provider value={{ setLoggedIn, loggedIn, credentials, setCredentials }}>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Registration} />
          </LoginContext.Provider>
          <PrivateRoute>
            <PlayerContext.Provider value={{ credentials, setLoggedIn, level, setLevel, score, setScore, highScore, setHighScore }}>
              <Route path="/main-screen" component={MainScreen} />
              <Route path="/play-screen" component={PlayScreen} />
            </PlayerContext.Provider>
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
