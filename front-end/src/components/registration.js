import React, { useState } from "react";
import { connect } from "react-redux";
import { signUp } from "./../actions/actionCreator";
import {Link} from "react-router-dom";

export const Register = (props) => {

    const [form, setForm] = useState({
        username: '',
        password: '',
    })

    const register = e => {
        e.preventDefault();
        props.signUp(form);
        if (props.loggedIn === false) {
            return props.history.push("/")
        }
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <Link className="mainLink" to='/'>Login</Link>

            <form className="loginForm" onSubmit={register}>
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
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                />

                <button className="mainButtons">Register</button>
            </form>
        </div>
    );
};

export default connect(state => state, { signUp })(Register);