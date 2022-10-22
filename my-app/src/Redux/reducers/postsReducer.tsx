import {
    SUCCESS_FETCH_POSTS_BY_ID,
    SUCCESS_FETCH_POSTS,
    SUCCESS_FETCH_POSTS_BY_TAG,
} from "../actions/actions.tsx";
import {UserPreview} from "./usersReducer.tsx";


export class PostPreview{
    id: string;
    text: string;
    image: string;
    likes: number;
    tags: string[];
    publishDate: string;
    owner: UserPreview;
}
export interface Posts {
    posts: PostPreview[],
    postsById: PostPreview[],
    postsByTag: PostPreview[],
}

const initialState: Posts = {
    posts: [],
    postsById: [],
    postsByTag: [],
}

const postsReducer = (state= initialState, action) => {
    switch (action.type) {
        case SUCCESS_FETCH_POSTS:
            return{
                ...state,
                posts: action.payload,
            }

        case SUCCESS_FETCH_POSTS_BY_ID:
            return {
                ...state,
                postsById: action.payload,
            }
        case SUCCESS_FETCH_POSTS_BY_TAG:
            return {
                ...state,
                postsByTag: action.payload,
            }
        default:
            return state;
    }
}
export default postsReducer;