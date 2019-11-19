import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, LOGOUT_FAILURE, ADD_SCORE, ADD_LEVEL, SUBMIT_ANSWER, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from './../actions/actionCreator';

export const initialState = {
    loggedIn: false,
    credentials: {
        username: '',
        password: ''
    },
    level: 0,
    score: 0,
    highScore: 0
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_SUCCESS:
            return console.log("signup worked")
        case SIGN_UP_FAILURE:
            return console.log("signup didnt work");

        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true
            }
        case LOGIN_FAILURE:
            return console.log("Login didnt work")
        case LOGOUT_SUCCESS:
            return {
                ...state,
                loggedIn: false
            }
        case LOGOUT_FAILURE:
            return console.log("Logout didnt work")
        case ADD_SCORE:
            console.log(action.payload);
            return {

            }
        case ADD_LEVEL:
            console.log(action.payload);
            return {

            }
        case SUBMIT_ANSWER:
            console.log(action.payload);
            return {

            }
        default:
            return state;
    }
};