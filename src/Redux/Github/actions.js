import axios from 'axios'

export const actionConstants = {
    SEARCH_GITHUB_REQUEST: "SEARCH_GITHUB_REQUEST",
    SEARCH_GITHUB_SUCCESS:"SEARCH_GITHUB_SUCCESS",
    SEARCH_GITHUB_FAILURE:"SEARCH_GITHUB_FAILURE",
    GET_USER_REQUEST:"GET_USER_REQUEST",
    GET_USER_SUCCESS:"GET_USER_SUCCESS",
    GET_USER_FAILURE:"GET_USER_FAILURE",
}

// action creators

const searchGithubRequest = () => {
    return {
        type: actionConstants.SEARCH_GITHUB_REQUEST 
    }
}

const searchGithubSuccess = (data) => {
    return {
        type: actionConstants.SEARCH_GITHUB_SUCCESS,
        payload: data 
    }
}

const searchGithubFailure = () => {
    return {
        type: actionConstants.SEARCH_GITHUB_FAILURE
    }
}

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

const getUserFailure = () => {
    return {
        type: actionConstants.GET_USER_FAILURE
    }
}

// Get User Data Thunk

export const getGithubUser = (login) => async (dispatch) => {
    dispatch(getUserRequest());
    await axios.get(`https://api.github.com/users/${login}`)
    .then(res => {
        console.log(res);
    })
    .catch(err => dispatch(getUserFailure()))
}
    

// Search Github Thunk

export const searchGithub = (query, page = 1) => async (dispatch) => {
    dispatch(searchGithubRequest());
    await axios.get(`https://api.github.com/search/users?q=${query}&page=${page}&per_page=5`)
    .then(res => dispatch(searchGithubSuccess(res.data.items)))
    .catch(err => dispatch(searchGithubFailure()))
}
