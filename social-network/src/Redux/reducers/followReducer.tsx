//my followeds, my followers,loadedUserFolloweds, loadedUserFollows

import {
    GET_MY_FOLLOWEDS_SUCCESS,
    GET_MY_FOLLOWERS,
    GET_MY_FOLLOWERS_SUCCESS,
    GET_USER_FOLLOWEDS
} from "../actions/followActions";

const initialState = {
    myFolloweds: [],
    myFollowers: [],
    loadedUserFolloweds: [],
    loadedUserFollowers: [],
}

const followReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MY_FOLLOWERS_SUCCESS:
            return {
                ...state,
                myFollowers: action.payload.data,
            }
        case GET_MY_FOLLOWEDS_SUCCESS:
            return {
                ...state,
                myFolloweds: action.payload.data,
            }
        default:
            return state;
    }
}

export default followReducer