import {applyMiddleware, createStore} from "@reduxjs/toolkit";
import rootReducer from "./reducers/reducer.tsx";
import thunk from "redux-thunk";
import usersMiddleware from "./middleware/usersMiddleware.tsx";
import postsMiddleware from "./middleware/postsMiddleware.tsx";
import {Session} from "./reducers/sessionReducer.tsx";
import {Users} from "./reducers/usersReducer.tsx";
import {Posts} from "./reducers/postsReducer.tsx";
import sessionMiddleware from "./middleware/sessionMiddleware.tsx";

export interface State {
    session: Session,
    users: Users,
    posts: Posts,
}

const store = createStore(rootReducer, applyMiddleware(thunk, usersMiddleware, postsMiddleware, sessionMiddleware));

export default store