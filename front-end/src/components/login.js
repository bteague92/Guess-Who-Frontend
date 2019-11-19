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
    };

    useEffect(() => {
        if (props.loggedIn === true) {
            props.history.push("/main-screen")
        }
        if (props.loggedIn === false) {
            props.history.push("/")
        }
    }, [props.loggedIn]);

    const handleChange = (e) => {
        setForm({
            ...form,
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
                    value={form.username}
                    onChange={handleChange}
                />
                <input
                    className="loginItems"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={form.password}
                    onChange={handleChange}
                />
                <button className="mainButtons">Login</button>
                <button className="mainButtons" onClick={() => props.history.push("/register")}>Sign Up</button>
            </form>
        </div>
    );
};

export default connect(state => state, { login })(Login);