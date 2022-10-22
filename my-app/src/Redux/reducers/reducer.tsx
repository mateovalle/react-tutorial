import {} from 'react-redux'
import {combineReducers} from "@reduxjs/toolkit";
import sessionReducer from "./sessionReducer.tsx";
import usersReducer from './usersReducer.tsx';
import postsReducer from "./postsReducer.tsx";


const rootReducer = combineReducers({
    session: sessionReducer,
    users: usersReducer,
    posts: postsReducer,
})

export default rootReducer