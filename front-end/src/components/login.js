import React, { useState, useEffect, useContext } from "react";
import { axiosWithAuth } from "./../utils/axiosWithAuth";
import Context from "./../contexts/loginContext";
import NavMenu from "./NavMenu";

const Login = (props) => {

    const { credentials, setCredentials, setLoggedIn, loggedIn, highScore, setHighScore } = useContext(Context);

    const login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/auth/login", credentials)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("username", credentials.username);
                localStorage.setItem("id", res.data.id);
                localStorage.setItem("hs", res.data.score);
                setHighScore(res.data.score)
                setLoggedIn(true);
                setCredentials({
                    username: credentials.username
                });
                props.history.push("/main-screen")
            })
            .catch(err => err)
    };

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div>
            <NavMenu />
            <form className="loginForm" onSubmit={login}>
                <h1 className="guessWhoHeader">Guess Who</h1>
                <input
                    className="loginItems"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input
                    className="loginItems"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button className="mainButtons">Login</button>
                <button className="mainButtons" onClick={() => props.history.push("/register")}>Sign Up</button>
            </form>
        </div>
    );
};

export default Login;