import {UserPreview} from "../reducers/usersReducer.tsx";
import {PostPreview, Posts} from "../reducers/postsReducer.tsx";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_REQUEST_ERROR = 'LOGIN_REQUEST_ERROR';
export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_REQUEST_ERROR = 'SIGNUP_REQUEST_ERROR';
export const SIGNUP_REQUEST_SUCCESS = 'SIGNUP_REQUEST_SUCCESS'
export const START_FETCH_PROFILES = 'START_FETCH_PROFILES';
export const SUCCESS_FETCH_PROFILES = 'SUCCESS_FETCH_PROFILES';
export const START_FETCH_POSTS = 'START_FETCH_POSTS';
export const SUCCESS_FETCH_POSTS = 'SUCCESS_FETCH_POSTS';
export const START_FETCH_POSTS_BY_ID = 'START_FETCH_POSTS_BY_ID';
export const SUCCESS_FETCH_POSTS_BY_ID = 'SUCCESS_FETCH_POSTS_BY_ID';
export const START_FETCH_POSTS_BY_TAG = 'START_FETCH_POSTS_BY_TAG';
export const SUCCESS_FETCH_POSTS_BY_TAG = 'SUCCESS_FETCH_POSTS_BY_TAG';
export const START_FETCH_COMMENTS = 'START_FETCH_COMMENTS';
export const SUCCESS_FETCH_COMMENTS = 'SUCCESS_FETCH_COMMENTS';


export const login = (payload) => {
    return {type: LOGIN_REQUEST, payload}
}

export const loginSuccess = (payload) => {
    return {type: LOGIN_REQUEST_SUCCESS, payload}
}

export const loginError = () => {
    return {type: LOGIN_REQUEST_ERROR}
}

export const logout = () => {
    return {type: LOGOUT_REQUEST}
}

export const signUp = (payload) => {
    return {type: SIGNUP_REQUEST, payload}
}

export const signUpError = () => {
    return {type: SIGNUP_REQUEST_ERROR}
}

export const signUpSuccess = (payload) => {
    return {type: SIGNUP_REQUEST_SUCCESS, payload}
}

export const startFetchProfiles = () => {
    return {type: START_FETCH_PROFILES}
}

export const successFetchProfiles = (payload: UserPreview[]) =>{
    return {type: SUCCESS_FETCH_PROFILES, payload}
}
export const startFetchPosts = () => {
    return {type: START_FETCH_POSTS}
}

export const successFetchPosts = (payload: PostPreview[]) => {
    return {type: SUCCESS_FETCH_POSTS, payload}
}

export const startFetchPostsById = (payload: string) => {
    return {type: START_FETCH_POSTS_BY_ID, payload}
}

export const successFetchPostsById = (payload: PostPreview) => {
    return {type: SUCCESS_FETCH_POSTS_BY_ID, payload}
}

export const startFetchPostsByTag = (payload: string) => {
    return {type: START_FETCH_POSTS_BY_TAG, payload}
}

export const successFetchPostsByTag = (payload: PostPreview[]) => {
    return {type: SUCCESS_FETCH_POSTS_BY_TAG, payload}
}

