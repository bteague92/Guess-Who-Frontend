import React, { useState, useContext } from "react";
import axios from "axios";
import LoginContext from "./../contexts/loginContext";
import NavMenu from "./NavMenu";

export const Register = (props) => {

    const { credentials, setCredentials, setLoggedIn, loggedIn } = useContext(LoginContext);

    const signUp = e => {
        e.preventDefault();
        axios
            .post(`https://backend-guesswho.herokuapp.com/api/auth/register`, credentials)
            .then(res => {
                props.history.push("/");
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
             {/* Added NavMenu here */}
             <NavMenu/>
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