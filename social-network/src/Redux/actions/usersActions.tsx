export const GET_USERS_REQUEST = 'GET_USERS_REQUEST'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_ERROR = 'GET_USERS_ERROR'

export const usersActions = {
    getUsers: {
        request: () => ({type: GET_USERS_REQUEST}),
        success: (payload) => ({type: GET_USERS_SUCCESS}),
        error: () => ({type: GET_USERS_ERROR}),
    },
}