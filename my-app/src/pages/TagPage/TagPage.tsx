import {useParams} from "react-router-dom";
import Post from "../../components/Post/Post.tsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {startFetchPostsByTag} from "../../Redux/actions/actions.tsx";
import {State} from "../../Redux/store.tsx";
import PostsPage from "../PostsPage/PostsPage.tsx";

const TagPage = () => {
    const params = useParams();
    const postsByTag = useSelector((state: State) => {return state.posts.postsByTag})
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(startFetchPostsByTag(params.tag))
    }, [params])

    return(
        <div>
            <h3>#{params.tag}</h3>
            <PostsPage />
        </div>
    )
}

export default TagPage;