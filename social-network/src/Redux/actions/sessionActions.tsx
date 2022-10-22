
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_ERROR = 'SIGNUP_ERROR'

export const sessionActions = {
    login: {
        request: (payload) => ({type: LOGIN_REQUEST, payload}),
        success: (payload) => ({type: LOGIN_SUCCESS, payload}),
        error: () => ({type: LOGIN_ERROR}),
    },
    logout: {
        request: () => ({type: LOGOUT_REQUEST})
    },
    signUp: {
        request: (payload) => ({type: SIGNUP_REQUEST, payload}),
        success: (payload) => ({type: SIGNUP_SUCCESS, payload}),
        error: () => ({type: SIGNUP_ERROR}),
    }
}