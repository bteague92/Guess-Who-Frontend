import React, { useState, useContext, useEffect } from 'react';
import { axiosWithAuth } from "./../utils/axiosWithAuth";
import Context from "./../contexts/loginContext";
import NavMenu from "./NavMenu";

const MainScreen = (props) => {

    const { setCredentials, credentials, setLoggedIn, loggedIn, level, setLevel, highScore, setHighScore } = useContext(Context);

    const [newName, setNewName] = useState('');

    const play = (e) => {
        e.preventDefault();
        props.history.push("/play-screen");
    }

    const deleteAccount = user => {
        axiosWithAuth()
            .delete(`/api/auth/users/${localStorage.getItem("id")}`)
            .then(res => {
                localStorage.removeItem("token");
                localStorage.removeItem("username");
                localStorage.removeItem("id");
                localStorage.removeItem("hs");
                setLevel(0);
                props.history.push("/");
            })
            .catch(err => console.log(err))
    };

    const logout = e => {
        e.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("id");
        localStorage.removeItem("hs");
        setLoggedIn(false);
        props.history.push("/");
    };

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    };

    const editUsername = e => {
        axiosWithAuth()
            .put(`/api/auth/users/${localStorage.getItem("id")}`, credentials)
            .then(res => {
                setCredentials({
                    username: res.data.username
                })
                localStorage.setItem("username", credentials.username);
            })
            .catch(err => err)
    }

    useEffect(() => {
        axiosWithAuth()
            .get(`/api/auth/users/${localStorage.getItem("id")}`)
            .then(res => {
                console.log("new res", res)
                setHighScore(res.data[3].score);
            })
            .catch(err => err)
    }, [])

    const newHighScore = localStorage.getItem("hs");

    useEffect(() => {
        if (newHighScore > 5 && newHighScore < 11) {
            setLevel(1);
        } else if (newHighScore > 10 && newHighScore < 20) {
            setLevel(2);
        }
    }, [highScore])

    return (
        <div>
            <NavMenu />
            <div className="loginForm">
                <div className="mainScreenItem">{localStorage.getItem("username")}</div>
                <form onSubmit={editUsername}>
                    <input className="nameChangeInput" onChange={handleChange} type="text" name="username" />
                    <button className="nameChangeButton">Change Username</button>
                </form>
                <div className="mainScreenItem">Level: {level}</div>
                <div className="mainScreenItem">High Score: {highScore}</div>
                <button onClick={play} className="playButton">Play</button>
                <button className="signOutButton" onClick={logout}>Sign Out</button>
                <button className="deleteButton" onClick={deleteAccount}>Delete Account</button>
            </div>
        </div>
    );
}

export default MainScreen;