export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';
export const ADD_SCORE = 'ADD_SCORE';
export const ADD_LEVEL = 'ADD_LEVEL';
export const SIGN_UP = 'SIGN_UP';

export const signUp = details => {
    return {
        type: SIGN_UP,
        payload: details
    }
};

export const logout = logout => {
    return {
        type: LOGOUT,
        payload: logout
    }
};

export const login = credentials => {
    return {
        type: LOGIN,
        payload: credentials
    }
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