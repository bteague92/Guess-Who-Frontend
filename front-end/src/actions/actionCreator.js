import { axiosWithAuth } from "./../utils/axiosWithAuth";
import axios from "axios";

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';
export const ADD_SCORE = 'ADD_SCORE';
export const ADD_LEVEL = 'ADD_LEVEL';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const signUp = credentials => dispatch => {
    dispatch({
        type: SIGN_UP
    })
    axios
        .post(`https://backend-guesswho.herokuapp.com//api/auth/register`, credentials)
        .then(res => {
            localStorage.setItem("token", res.data.token);
            dispatch({
                type: SIGN_UP_SUCCESS,
                payload: res.data.token
            })
        })
        .catch(err => {
            dispatch({
                type: SIGN_UP_FAILURE
            })
        })
};

export const logout = logout => {
    return {
        type: LOGOUT,
        payload: logout
    }
};

export const login = credentials => dispatch => {
    dispatch({
        type: LOGIN,
    })
    axiosWithAuth()
        .post("/api/auth/login", credentials)
        .then(res => {
            console.log("this is res", res)
            localStorage.setItem("token", res.data.token);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data.token
            })
        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAILURE
            })
        })

};

export const submitAnswer = answer => {
    return {
        type: SUBMIT_ANSWER,
        payload: answer
    }
}

export const addScore = amount => {
    return {
        type: ADD_SCORE,
        payload: amount
    }
}

export const addLevel = level => {
    return {
        type: ADD_LEVEL,
        payload: level
    }
}