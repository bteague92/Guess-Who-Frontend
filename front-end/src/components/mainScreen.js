import React, { useState, useContext } from 'react';
import { axiosWithAuth } from "./../utils/axiosWithAuth";
// import PlayerContext from "./../contexts/playerContext";
import Context from "./../contexts/loginContext";

const MainScreen = (props) => {

    const { credentials, setLoggedIn } = useContext(Context);

    const logout = () => {
        axiosWithAuth()
            .post("/api/auth/login", credentials)
            .then(res => {
                console.log("this is res", res);
                localStorage.removeItem("token");
                setLoggedIn(false);
                props.history.push("/");
            })
            .catch(err => err)
    };

    return (
        <div className="loginForm">
            <div className="mainScreenItem">{credentials.username}</div>
            <button onClick={() => props.history.push("/update-username")}>Change Username</button>
            <div className="mainScreenItem">Level: {props.level}</div>
            <div className="mainScreenItem">High Score: {props.highScore}</div>
            <button className="playButton">Play</button>
            <button className="signOutButton" onClick={logout}>Sign Out</button>
        </div>
    );
}

export default MainScreen;