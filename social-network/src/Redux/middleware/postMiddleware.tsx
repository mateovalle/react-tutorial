import {
    COMMENT_REQUEST,
    DELETE_LIKE_REQUEST, GET_MY_POSTS,
    GET_POSTS_BY_USER_ID_REQUEST,
    LIKE_REQUEST,
    POST_REQUEST,
    POST_SUCCESS,
    postActions
} from "../actions/postActions.tsx";
import {post, put, deleteRequest, get} from '../../util/http'

const postMiddleware = ({dispatch, getState}) => (next) => (action) => {
    next(action)

    switch (action.type) {
        case POST_REQUEST:
            post('/posts', {text: action.payload.text})
                .then((response) => {
                    dispatch(postActions.post.success(response.data))
                })
                .catch(e => {
                    console.log(e)
                    dispatch(postActions.post.error)
                })
            return
        case LIKE_REQUEST:
            put('/posts/like/' + action.payload.postId)
                .then(() => {
                    dispatch(postActions.like.success)
                })
                .catch(() => {
                    dispatch(postActions.like.error)
                })
            return;
        case DELETE_LIKE_REQUEST:
            deleteRequest('/posts/unlike/' + action.payload.postId)
                .then(() => {
                    dispatch(postActions.deleteLike.success)
                })
                .catch(() => {
                    dispatch(postActions.deleteLike.error)
                })
            return;
        case GET_POSTS_BY_USER_ID_REQUEST:
            get('/posts/by-user/' + action.payload.userId)
                .then((response) => {
                    dispatch(postActions.getPostsByUserId.success(response))
                })
                .catch(() => {
                    dispatch(postActions.getPostsByUserId.error)
                })
            return;
        case GET_MY_POSTS:
            get('/posts/me')
                .then((response) => dispatch(postActions.getMyPosts.success(response)))
                .catch(() => dispatch(postActions.getMyPosts.error))
            return;
        case COMMENT_REQUEST:
            post('/posts/comments/' + action.payload.postId, {comment: action.payload.comment})
                .then(() => {dispatch(postActions.comment.success)})
                .catch(e => {
                    console.log(e)
                    dispatch(postActions.comment.error)
                })
            return;
    }
}

export default postMiddleware