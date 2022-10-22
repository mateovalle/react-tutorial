//My posts, loadedPosts, loadedComments, loadedLikes

import {GET_MY_POSTS, GET_MY_POSTS_SUCCESS} from "../actions/postActions";

const initialState = {
    myPosts: [],
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MY_POSTS_SUCCESS:
            return {
                ...state,
                myPosts: action.payload.data,
            }
        default:
            return state;
    }
}

export default postReducer