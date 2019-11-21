import React, { useState, useContext, useEffect } from 'react';
import { axiosWithAuth } from "./../utils/axiosWithAuth";
// import PlayerContext from "./../contexts/playerContext";
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
                console.log(res);
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
        setLoggedIn(false);
        props.history.push("/");
        console.log("credentials after logout", credentials);
        console.log("loggedIn after logout", loggedIn);
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
                console.log(res);
                setCredentials({
                    username: res.data.username
                })
                localStorage.setItem("username", credentials.username);
                console.log("credentials after update", credentials);
            })
            .catch(err => err)
    }

    const newHighScore = localStorage.getItem("hs");

    useEffect(() => {
        if (newHighScore > 5 && newHighScore < 10) {
            setLevel(1);
        } else if (newHighScore > 10 && newHighScore < 20) {
            setLevel(2);
        }
    }, [highScore])

    return (
        <div className="loginForm">
             
            <div className="mainScreenItem">{localStorage.getItem("username")}</div>
            <form onSubmit={editUsername}>
                <input onChange={handleChange} type="text" name="username" />
                <button>Change Username</button>
            </form>
            <div className="mainScreenItem">Level: {level}</div>
            <div className="mainScreenItem">High Score: {localStorage.getItem("hs")}</div>
            <button onClick={play} className="playButton">Play</button>
            <button className="signOutButton" onClick={logout}>Sign Out</button>
            <footer>
                  {/* Added NavMenu here */}
             <NavMenu/>
            </footer>
            <button className="deleteButton" onClick={deleteAccount}>Delete Account</button>
        </div>
    );
}

export default MainScreen;