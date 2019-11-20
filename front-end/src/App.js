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
import Context from "./contexts/loginContext";
import PlayerContext from "./contexts/playerContext";
import UpdateForm from "./components/updateUsername";
import Users from "./components/Users";

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
          <Context.Provider value={{ setLoggedIn, loggedIn, setLoggedIn, credentials, setCredentials, level, setLevel, score, setScore, highScore, setHighScore }}>
            <Route exact path="/" component={Login} />
 
            <Route path="/register" component={Registration} />

            {/* Made changes added users Route */}
            <Route path="/users" component={Users}/> 
            
            {/* <PlayerContext.Provider value={{ credentials, setLoggedIn, level, setLevel, score, setScore, highScore, setHighScore }}> */}
            <PrivateRoute exact path="/main-screen" component={MainScreen} />
            <PrivateRoute exact path="/play-screen" component={PlayScreen} />
            <PrivateRoute exact path="/update-form" component={UpdateForm} />
            {/* </PlayerContext.Provider> */}
          </Context.Provider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
