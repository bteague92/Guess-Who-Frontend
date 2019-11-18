import React, { useState } from "react";
import { axiosWithAuth } from "./../utils/axiosWithAuth";
import { connect } from "react-redux";
// import { login } from './../actions/actionCreator';

const Login = (props) => {

    const [loggedIn, setLoggedIn] = useState(false);

    const login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/auth/login", props.credentials)
            .then(res => {
                localStorage.setItem("token", res.data.payload);
                if ("token" ? setLoggedIn(true) : null);
                return props.history.push("/main-screen")
            })
            .catch(err => console.log(err))
    };

    const handleChange = (e) => {
    }

    return (
        <div>
            <form className="loginForm" onSubmit={login}>
                <label name="username">Username:</label>
                <input
                    className="loginItems"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={props.credentials.username}
                    onChange={handleChange}
                />
                <label name="password">Password:</label>
                <input
                    className="loginItems"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={props.credentials.password}
                    onChange={handleChange}
                />
                <button>Log in</button>
            </form>
        </div>
    );
};

export default connect(state => state, null)(Login);