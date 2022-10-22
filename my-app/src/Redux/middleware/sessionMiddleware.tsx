import {
    login,
    LOGIN_REQUEST,
    loginError,
    loginSuccess,
    LOGOUT_REQUEST,
    SIGNUP_REQUEST, SIGNUP_REQUEST_SUCCESS,
    signUpError, signUpSuccess
} from "../actions/actions.tsx";
import {post} from '../../utils/http'

const sessionMiddleware = ({dispatch}) => (next) => (action) => {
    next(action)

    switch (action.type) {
        case LOGIN_REQUEST:
                post('/login', {username: action.payload.username, password: action.payload.password})
                    .then((response) =>{
                        console.log('new token: ' + response.jwt)
                        window.localStorage.setItem('token', response.jwt)
                        window.localStorage.setItem('activeUser', action.payload.username)
                        dispatch(loginSuccess({username: action.payload.username, token: response.jwt}))
                    }).catch(e => {
                            console.log(e)
                            action.payload.errorCallback(e.status)
                            dispatch(loginError)
                        })
            return;
        case SIGNUP_REQUEST:
            post('/sign-up', {username: action.payload.username, email: action.payload.email, password: action.payload.password})
                .then(() => dispatch(signUpSuccess(action.payload)))
                .catch( e => {
                    console.log(e)
                    action.payload.errorCallback(e.status)
                    dispatch(signUpError)
                });
                return;
        case SIGNUP_REQUEST_SUCCESS:
            dispatch(login(action.payload));
            return;
        case LOGOUT_REQUEST:
            window.localStorage.setItem('token', '')
            window.localStorage.setItem('activeUser', '')
    }
}

export default sessionMiddleware;