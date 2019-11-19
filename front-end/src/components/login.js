import React, { useState, useEffect, useContext } from "react";
import { axiosWithAuth } from "./../utils/axiosWithAuth";
import Context from "./../contexts/loginContext";

const Login = (props) => {

    const { credentials, setCredentials, setLoggedIn, loggedIn } = useContext(Context);

    const login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/auth/login", credentials)
            .then(res => {
                console.log("this is res", res);
                localStorage.setItem("token", res.data.token);
                setLoggedIn(true);
                if (loggedIn === true) {
                    props.history.push("/main-screen")
                }
                setCredentials({
                    username: credentials.username
                })
                console.log("LoggedIn?", loggedIn);
                console.log("credentials:", credentials);
            })
            .catch(err => err)
    };

    useEffect(() => {
        if (loggedIn === true) {
            props.history.push("/main-screen")
            console.log("LoggedIn?", loggedIn)
        } else {
            props.history.push("/")
        }
    }, [loggedIn])

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div>
            <form className="loginForm" onSubmit={login}>
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