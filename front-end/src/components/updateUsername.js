import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { axiosWithAuth } from "./../utils/axiosWithAuth";
import Context from "./../contexts/loginContext";

const UpdateForm = props => {

    const { credentials, setCredentials, setLoggedIn, loggedIn } = useContext(Context);

    const changeHandler = e => {
        let value = e.target.value;
        setCredentials({
            ...credentials,
            [e.target.name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`/api/auth/login`, credentials)
            .then(res => {
                props.history.push('/main-screen');
            })
            .catch(err => err);
    };

    return (
        <div>
            <h2>Update Username</h2>
            <form className="loginForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    onChange={changeHandler}
                    placeholder="new username"
                    value={credentials.username}
                />
                <button className="mainButtons">Update</button>
            </form>
        </div>
    );
};

export default UpdateForm;