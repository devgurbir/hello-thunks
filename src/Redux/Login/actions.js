import axios from 'axios'

export const actionConstants = {
    REGISTRATION_REQUEST: "REGISTRATION_REQUEST",
    REGISTRATION_SUCCESS:"REGISTRATION_SUCCESS",
    REGISTRATION_FAILURE:"REGISTRATION_FAILURE",
    LOGIN_REQUEST: "LOGIN_REQUEST",
    LOGIN_SUCCESS:"LOGIN_SUCCESS",
    LOGIN_FAILURE:"LOGIN_FAILURE",
    GET_USER_REQUEST: "GET_USER_REQUEST",
    GET_USER_SUCCESS:"GET_USER_SUCCESS",
    GET_USER_FAILURE:"GET_USER_FAILURE"
}

// Registration Action creators
const registrationRequest = () => {
    return {
        type: actionConstants.REGISTRATION_REQUEST
    }
}

const registrationSuccess = () => {
    return {
        type: actionConstants.REGISTRATION_SUCCESS
    }
}

const registrationFailure = () => {
    return {
        type: actionConstants.REGISTRATION_FAILURE
    }
}

// Login Action Creators
const loginRequest = () => {
    return {
        type: actionConstants.LOGIN_REQUEST
    }
}

const loginSuccess = (token) => {
    return {
        type: actionConstants.LOGIN_SUCCESS,
        payload: token
    }
}

const loginFailure = (err) => {
    return {
        type: actionConstants.LOGIN_FAILURE,
        payload: err
    }
}

// Get User
const getUserRequest = () => {
    return {
        type: actionConstants.GET_USER_REQUEST
    }
}

const getUserSuccess = (data) => {
    return {
        type: actionConstants.GET_USER_SUCCESS,
        payload: data
    }
}

const getUserFailure = (err) => {
    return {
        type: actionConstants.GET_USER_FAILURE,
        payload: err
    }
}

// Thunk creators

// Register User Thunk

const registerUser = ({name, email, password, username, mobile, description}) => async (dispatch) => {
    dispatch(registrationRequest());
    await axios.post("http://localhost:8080/auth/register", {
        name,
        email,
        password,
        username,
        mobile,
        description
    })
    .then( res => {
        console.log("Successful", res)
        dispatch(registrationSuccess())
    })
    .catch(err => {
        console.log(err);
        dispatch(registrationFailure())
    })
}

// Login User Thunk
const loginUser = ({username, password}) => async (dispatch) => {
    dispatch(loginRequest())
    await axios.post("http://localhost:8080/auth/login", {
        username,
        password
    })
    .then(res => {
        dispatch(loginSuccess(res.data.token))
        dispatch(getUser(username, res.data.token))
        console.log(res)
    })
    .catch(err => dispatch(loginFailure(err)))
}

// Get User Info Thunk
const getUser = (username, token)  => async (dispatch) => {
    dispatch(getUserRequest());
    await axios.get(`http://localhost:8080/user/${username}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(res=>dispatch(getUserSuccess(res.data)))
    .catch(err => dispatch(getUserFailure(err)))
}

export {registerUser, loginUser, getUser}

