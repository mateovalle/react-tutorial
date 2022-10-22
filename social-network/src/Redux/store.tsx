import rootReducer from "./reducers/rootReducer.tsx";
import {applyMiddleware, createStore} from "@reduxjs/toolkit";
import sessionMiddleware from "./middleware/sessionMiddleware.tsx";
import followMiddleware from "./middleware/followMiddleware.tsx";
import postMiddleware from "./middleware/postMiddleware.tsx";
import usersMiddleware from "./middleware/usersMiddleware.tsx";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk, sessionMiddleware, followMiddleware, postMiddleware, usersMiddleware))

export default store