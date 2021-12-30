import { actionConstants } from "./actions"

const initState = {
    isLoading: false,
    isError: false,
    token: null,
    isAuth: false,
    userInfo: {}
}

const reducer = (state = initState, action) => {
    switch(action.type){
        case actionConstants.REGISTRATION_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actionConstants.REGISTRATION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false
            }
        case actionConstants.REGISTRATION_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case actionConstants.LOGIN_REQUEST:
        return {
            ...state,
            isLoading: true
        }
        case actionConstants.LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload,
                isLoading: false,
                isError: false,
                isAuth: true
            }
        case actionConstants.LOGIN_FAILURE:
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
                userInfo: action.payload,
                isLoading: false,
                isError: false
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

export default reducer