import {useParams} from "react-router-dom";
import {useState} from "react";
import {useEffect} from "react";
import Post from "../../components/Post/Post.tsx";
import {useDispatch, useSelector} from "react-redux";
import {
    startFetchPosts,
    startFetchPostsById,
    startFetchPostsByTag
} from "../../Redux/actions/actions.tsx";
import {State} from "../../Redux/store.tsx";
import PostMUI from "../../components/postMUI/PostMUI.tsx";
import './PostsPage.css'


const PostsPage = () => {
    const params = useParams();
    const [postsToShow, setPostsToShow] = useState([])
    const postsById = useSelector((state: State) => {return state.posts.postsById})
    const allPosts = useSelector((state: State) => {return state.posts.posts})
    const postsByTag = useSelector((state: State) => {return state.posts.postsByTag})
    const dispatch = useDispatch()
    useEffect(() => {
        if (params.id) {
            dispatch(startFetchPostsById(params.id))
            setPostsToShow(postsById)
        } else if (params.tag) {
            dispatch(startFetchPostsByTag(params.tag))
            setPostsToShow(postsByTag)
        } else {
            dispatch(startFetchPosts())
            setPostsToShow(allPosts)
        }
    }, [params, allPosts, postsById, postsByTag])

    return(
        <div className={'posts-container'}>
            {postsToShow.map((post)=> {
                return <PostMUI key={post.id} post={post}/>
            })}
        </div>
    )
}

export default PostsPage;