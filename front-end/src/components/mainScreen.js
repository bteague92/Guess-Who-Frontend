import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { axiosWithAuth } from "./../utils/axiosWithAuth";
import axios from "axios";
import { logout } from './../actions/actionCreator';

const MainScreen = (props) => {

    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const logout = e => {
        props.logout(props.credentials);
    };

    useEffect(() => {
        if (props.loggedIn === false) {
            localStorage.removeItem("token")
            props.history.push("/")
        }
    }, [props.loggedIn]);

    return (
        <div className="loginForm">
            <div className="mainScreenItem">Username</div>
            <div className="mainScreenItem">Level: {props.level}</div>
            <div className="mainScreenItem">High Score: {props.highScore}</div>
            <button className="playButton" onClick={() => props.history.push("/play-screen")}>Play</button>
            <button className="signOutButton" onClick={logout}>Sign Out</button>
        </div>
    );
}

export default connect(state => state, { logout })(MainScreen);