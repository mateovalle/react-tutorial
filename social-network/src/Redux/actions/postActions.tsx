//hacer un posteo, seguir otro usuario, comentar un posteo, likear un posteo
export const POST_REQUEST = 'POST_REQUEST'
export const POST_SUCCESS = 'POST_SUCCESS'
export const POST_ERROR = 'POST_ERROR'
export const LIKE_REQUEST = 'LIKE_REQUEST'
export const LIKE_SUCCESS = 'LIKE_SUCCESS'
export const LIKE_ERROR = 'LIKE_ERROR'
export const DELETE_LIKE_REQUEST = 'DELETE_LIKE_REQUEST'
export const DELETE_LIKE_SUCCESS = 'DELETE_LIKE_SUCCESS'
export const DELETE_LIKE_ERROR = 'DELETE_LIKE_ERROR'
export const GET_POSTS_BY_USER_ID_REQUEST = 'GET_POSTS_BY_USER_ID_REQUEST'
export const GET_POSTS_BY_USER_ID_SUCCESS = 'GET_POSTS_BY_USER_ID_SUCCESS'
export const GET_POSTS_BY_USER_ID_ERROR = 'GET_POSTS_BY_USER_ID_ERROR'
export const GET_MY_POSTS = 'GET_MY_POSTS'
export const GET_MY_POSTS_SUCCESS = 'GET_MY_POSTS_SUCCESS'
export const GET_MY_POSTS_ERROR = 'GET_MY_POSTS_ERROR'
export const FOLLOW_REQUEST = 'FOLLOW_REQUEST'
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS'
export const FOLLOW_ERROR = 'FOLLOW_ERROR'
export const COMMENT_REQUEST = 'COMMENT_REQUEST'
export const COMMENT_SUCCESS = 'COMMENT_SUCCESS'
export const COMMENT_ERROR = 'COMMENT_ERROR'


export const postActions = {
    post: {
        request: (payload) => ({type: POST_REQUEST, payload}),
        success: (payload) => ({type: POST_SUCCESS, payload}),
        error: () => ({type: POST_ERROR}),
    },
    like: {
        request: (payload) => ({type: LIKE_REQUEST, payload}),
        success: () => ({type: LIKE_SUCCESS}),
        error: () => ({type: LIKE_ERROR}),
    },
    deleteLike: {
        request: (payload) => ({type: DELETE_LIKE_REQUEST, payload}),
        success: () => ({type: DELETE_LIKE_SUCCESS, payload}),
        error: () => ({type: DELETE_LIKE_ERROR})
    },
    getPostsByUserId: {
        request: (payload) => ({type: GET_POSTS_BY_USER_ID_REQUEST, payload}),
        success: (payload) => ({type: GET_POSTS_BY_USER_ID_SUCCESS, payload}),
        error: () => ({type: GET_POSTS_BY_USER_ID_ERROR}),
    },
    getMyPosts: {
      request: () => ({type: GET_MY_POSTS}),
      success: (payload) => ({type: GET_MY_POSTS_SUCCESS, payload}),
      error: () => ({type: GET_MY_POSTS_ERROR})
    },
    comment: {
        request: (payload) => ({type: COMMENT_REQUEST, payload}),
        success: () => ({type: COMMENT_SUCCESS}),
        error: () => ({type: COMMENT_ERROR})
    },

}
