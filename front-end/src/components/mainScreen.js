import React, { useState, useContext } from 'react';
import { axiosWithAuth } from "./../utils/axiosWithAuth";
// import PlayerContext from "./../contexts/playerContext";
import Context from "./../contexts/loginContext";

const MainScreen = (props) => {

    const { credentials, setLoggedIn, loggedIn, level, highScore } = useContext(Context);

    const play = (e) => {
        e.preventDefault();
        props.history.push("/play-screen");
    }

    const logout = e => {
        e.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        setLoggedIn(false);
        props.history.push("/");
        console.log("credentials after logout", credentials);
        console.log("loggedIn after logout", loggedIn);
    };

    return (
        <div className="loginForm">
            <div className="mainScreenItem">{localStorage.getItem("username")}</div>
            <button onClick={() => props.history.push("/update-username")}>Change Username</button>
            <div className="mainScreenItem">Level: {level}</div>
            <div className="mainScreenItem">High Score: {highScore}</div>
            <button onClick={play} className="playButton">Play</button>
            <button className="signOutButton" onClick={logout}>Sign Out</button>
        </div>
    );
}

export default MainScreen;