import {LOGIN_REQUEST, sessionActions, SIGNUP_REQUEST} from "../actions/sessionActions.tsx";
import {post} from '../../util/http'

const sessionMiddleware = ({dispatch, getState}) => (next) => (action) => {
    next(action)

    switch (action.type) {
        case LOGIN_REQUEST:
            post('/login', {username: action.payload.username, password: action.payload.password})
                .then((response) => {
                    window.localStorage.setItem('token', response.jwt)
                    action.payload.errorCallback(200)
                    dispatch(sessionActions.login.success(response.data))})
                .catch(e => {
                    console.log(e)
                    action.payload.errorCallback(e.status)
                    dispatch(sessionActions.login.error)
                })
            return;
        case SIGNUP_REQUEST:
            post('/sign-up', {username: action.payload.username, email: action.payload.email, password: action.payload.password})
                .then((response) => {
                    dispatch(sessionActions.login.request({username: action.payload.username, password: action.payload.password}))
                })
    }
}

export default sessionMiddleware