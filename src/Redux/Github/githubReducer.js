import { actionConstants } from "./actions"

const initState = {
    isLoading: false,
    isError: false,
    data: [],
    userData: {}
}

const githubReducer = (state = initState, action) => {
    switch(action.type){
        case actionConstants.SEARCH_GITHUB_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actionConstants.SEARCH_GITHUB_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload
            }
        case actionConstants.SEARCH_GITHUB_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
            case actionConstants.GET_USER_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actionConstants.GET_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                userData: action.payload
            }
        case actionConstants.GET_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default: 
            return state
    }
}

export default githubReducer