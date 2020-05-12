import allReducers from "./Reducers"
import { createStore, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"

var myStore = createStore(allReducers, compose(applyMiddleware(thunk)))

export default myStore
