import {
    START_FETCH_POSTS,
    START_FETCH_POSTS_BY_ID, START_FETCH_POSTS_BY_TAG,
    successFetchPosts,
    successFetchPostsById, successFetchPostsByTag
} from "../actions/actions.tsx";
import axios from "axios";

const postsMiddleware = ({dispatch}) => (next) => (action) => {
    next(action)

    // eslint-disable-next-line default-case
    switch (action.type){
        case START_FETCH_POSTS:
            axios.get('https://dummyapi.io/data/v1/post/', {headers: {'app-id': "6203cac620dca44319e5e397"}})
                .then(response => dispatch(successFetchPosts(response.data.data)))
                .catch(error=> console.log(error));
            return;
        case START_FETCH_POSTS_BY_ID:
            axios.get('https://dummyapi.io/data/v1/user/' + action.payload + '/post/', {headers: {'app-id': "6203cac620dca44319e5e397"}})
                .then(response => dispatch(successFetchPostsById(response.data.data)))
                .catch(error=> console.log(error));
            return;
        case START_FETCH_POSTS_BY_TAG:
            axios.get('https://dummyapi.io/data/v1/tag/' + action.payload + '/post/', {headers: {'app-id': "6203cac620dca44319e5e397"}})
                .then(response => dispatch(successFetchPostsByTag(response.data.data)))
                .catch(error=> console.log(error));
            return;
    }
}

export default postsMiddleware;