import React, { useState, useContext } from 'react';
import { axiosWithAuth } from "./../utils/axiosWithAuth";
// import PlayerContext from "./../contexts/playerContext";
import Context from "./../contexts/loginContext";

const MainScreen = (props) => {

    const { credentials, setLoggedIn, loggedIn, level, highScore } = useContext(Context);

    const logout = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/auth/login")
            .then(res => {
                localStorage.removeItem("token");
                setLoggedIn(false);
                props.history.push("/");
                console.log("credentials after logout", credentials);
                console.log("loggedIn after logout", loggedIn)
            })
            .catch(err => err)
    };

    return (
        <div className="loginForm">
            <div className="mainScreenItem">{credentials.username}</div>
            <button onClick={() => props.history.push("/update-username")}>Change Username</button>
            <div className="mainScreenItem">Level: {level}</div>
            <div className="mainScreenItem">High Score: {highScore}</div>
            <button className="playButton">Play</button>
            <button className="signOutButton" onClick={logout}>Sign Out</button>
        </div>
    );
}

export default MainScreen;