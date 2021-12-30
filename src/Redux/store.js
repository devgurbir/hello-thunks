import { applyMiddleware, configureStore, combineReducers } from "@reduxjs/toolkit"
import githubReducer from "./Github/githubReducer"
import reducer from "./Login/reducer"
import { createStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"


const rootReducer = {
    login: reducer,
    github: githubReducer
}
const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )

const combined = combineReducers(rootReducer)

const store = createStore(combined, composedEnhancer)

export default store