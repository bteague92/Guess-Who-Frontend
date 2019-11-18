import { LOGIN, LOGOUT, ADD_SCORE, ADD_LEVEL, SUBMIT_ANSWER, SIGN_UP } from './../actions/actionCreator';

export const initialState = {
    loggedIn: false,
    credentials: {
        username: '',
        password: ''
    },
    level: 0,
    score: 0

};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            console.log(action.payload);
            return {

            }
        case LOGIN:
            console.log(action.payload);
            return {
                ...state,
                username: (action.payload.username),
                password: (action.payload.password)
            }
        case LOGOUT:
            return {

            }
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