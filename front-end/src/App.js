import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "./utils/privateRoute";
import './App.css';
import Login from "./components/login";
import MainScreen from "./components/mainScreen";
import { reducer } from './reducers/reducer';
import PlayScreen from "./components/playScreen";
import Registration from "./components/registration";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Registration} />
          <PrivateRoute path="/main-screen">
            <Route exact path="/reducer" component={reducer} />
            <Route exact path="/main-screen" component={MainScreen} />
            <Route exact path="/play-screen" component={PlayScreen} />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default connect(state => state, null)(App);
