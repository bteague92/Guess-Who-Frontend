import React, { useState, useContext } from "react";
import { axiosWithAuth } from "./../utils/axiosWithAuth";
import axios from "axios";
import LoginContext from "./../contexts/loginContext";

export const Register = (props) => {

    const { credentials, setCredentials, setLoggedIn, loggedIn } = useContext(LoginContext);

    const signUp = e => {
        e.preventDefault();
        axios
            .post(`https://backend-guesswho.herokuapp.com/api/auth/register`, credentials)
            .then(res => {
                props.history.push("/");
                console.log("credentials:", credentials);
                console.log("credentials after signUp", credentials);
                console.log("loggedIn after signUp", loggedIn)
            })
            .catch(err => err)
    };

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form className="loginForm" onSubmit={signUp}>
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
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button className="mainButtons">Register</button>
            </form>
        </div>
    );
};

export default Register;