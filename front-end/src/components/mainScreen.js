import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { axiosWithAuth } from "./../utils/axiosWithAuth";
import { logout } from './../actions/actionCreator';

const MainScreen = (props) => {



    return (
        <div className="loginForm">
            <div className="mainScreenItem">Username</div>
            <div className="mainScreenItem">Level: {props.level}</div>
            <div className="mainScreenItem">High Score: {props.highScore}</div>
            <button className="playButton" onClick={() => props.history.push("/play-screen")}>Play</button>
            <button className="signOutButton" onClick={props.logout}>Sign Out</button>
        </div>
    );
}

export default connect(state => state, { logout })(MainScreen);