import {combineReducers} from "@reduxjs/toolkit";
import sessionReducer from "./sessionReducer.tsx";
import usersReducer from './usersReducer.tsx';
import postReducer from "./postReducer.tsx";
import followReducer from './followReducer.tsx'


const rootReducer = combineReducers({
    users: usersReducer,
})

export default rootReducer;