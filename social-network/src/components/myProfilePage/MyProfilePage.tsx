import {useDispatch} from "react-redux";
import {postActions} from "../../Redux/actions/postActions.tsx";
import {followActions} from "../../Redux/actions/followActions.tsx";

const MyProfilePage = () => {
    const dispatch = useDispatch()
    dispatch(postActions.getMyPosts)
    dispatch(followActions.getMyFollowers)
    dispatch(followActions.getMyFolloweds)

    return(
        <h1>Profile page</h1>
    )
}

export default MyProfilePage