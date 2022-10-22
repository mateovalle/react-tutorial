export const FOLLOW_USER = 'FOLLOW_USER'
export const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS'
export const FOLLOW_USER_ERROR = 'FOLLOW_USER_ERROR'
export const UNFOLLOW_USER = 'UNFOLLOW_USER'
export const UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS'
export const UNFOLLOW_USER_ERROR = 'UNFOLLOW_USER_ERROR'
export const GET_USER_FOLLOWERS = 'GET_USER_FOLLOWERS'
export const GET_USER_FOLLOWERS_SUCCESS = 'GET_USER_FOLLOWERS_SUCCESS'
export const GET_USER_FOLLOWERS_ERROR = 'GET_USER_FOLLOWERS_ERROR'
export const GET_USER_FOLLOWEDS = 'GET_USER_FOLLOWEDS'
export const GET_USER_FOLLOWEDS_SUCCESS = 'GET_USER_FOLLOWEDS_SUCCESS'
export const GET_USER_FOLLOWEDS_ERROR = 'GET_USER_FOLLOWEDS_ERROR'
export const GET_MY_FOLLOWERS = 'GET_MY_FOLLOWERS'
export const GET_MY_FOLLOWERS_SUCCESS = 'GET_MY_FOLLOWERS_SUCCESS'
export const GET_MY_FOLLOWERS_ERROR = 'GET_MY_FOLLOWERS_ERROR'
export const GET_MY_FOLLOWEDS = 'GET_MY_FOLLOWEDS'
export const GET_MY_FOLLOWEDS_SUCCESS = 'GET_MY_FOLLOWEDS_SUCCESS'
export const GET_MY_FOLLOWEDS_ERROR = 'GET_MY_FOLLOWEDS_ERROR'

export const followActions = {
    follow: {
        request: (payload) => ({type: FOLLOW_USER, payload}),
        success: () => ({type: FOLLOW_USER_SUCCESS}),
        error: () => ({type: FOLLOW_USER_ERROR}),
    },
    unfollow: {
        request: (payload) => ({type: UNFOLLOW_USER, payload}),
        success: () => ({type: UNFOLLOW_USER_SUCCESS}),
        error: () => ({type: UNFOLLOW_USER_ERROR}),
    },
    getUserFollowers: {
        request: (payload) => ({type:GET_USER_FOLLOWERS, payload}),
        success: (payload) => ({type:GET_USER_FOLLOWERS_SUCCESS, payload}),
        error: () => ({type:GET_USER_FOLLOWERS_ERROR})
    },
    getUserFolloweds: {
        request: (payload) => ({type:GET_USER_FOLLOWEDS, payload}),
        success: (payload) => ({type:GET_USER_FOLLOWEDS_SUCCESS, payload}),
        error: () => ({type:GET_USER_FOLLOWEDS_ERROR})
    },
    getMyFollowers: {
        request: () => ({type: GET_MY_FOLLOWERS}),
        success: (payload) => ({type: GET_MY_FOLLOWERS_SUCCESS, payload}),
        error: () => ({type: GET_MY_FOLLOWERS_ERROR})
    },
    getMyFolloweds: {
        request: () => ({type: GET_MY_FOLLOWEDS}),
        success: (payload) => ({type: GET_MY_FOLLOWEDS_SUCCESS, payload}),
        error: () => ({type: GET_MY_FOLLOWEDS_ERROR})
    }
}
