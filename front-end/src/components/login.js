import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./../utils/axiosWithAuth";
import { connect } from "react-redux";
import { login } from './../actions/actionCreator';

const Login = (props) => {

    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const login = e => {
        e.preventDefault();
        props.login(form);
        if (props.loggedIn === true) {
            return props.history.push("/main-screen")
        }
    };

    useEffect(() => {
        if (props.loggedIn === true) {
            props.history.push("/main-screen")
        }
    }, [props.loggedIn]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
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
                    value={form.username}
                    onChange={handleChange}
                />
                <label name="password">Password:</label>
                <input
                    className="loginItems"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={form.password}
                    onChange={handleChange}
                />
                <button>Log in</button>
                <button onClick={() => props.history.push("/register")}>Sign Up</button>
            </form>
        </div>
    );
};

export default connect(state => state, { login })(Login);