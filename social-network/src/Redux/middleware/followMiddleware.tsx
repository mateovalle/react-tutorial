import {
    FOLLOW_USER,
    followActions, GET_MY_FOLLOWEDS, GET_MY_FOLLOWERS,
    GET_USER_FOLLOWEDS,
    GET_USER_FOLLOWERS,
    UNFOLLOW_USER
} from "../actions/followActions.tsx";
import {put, deleteRequest, get} from '../../util/http'

const followMiddleware = ({dispatch, getState}) => (next) => (action) => {
    next(action)

    switch (action.type) {
        case FOLLOW_USER:
            put('/followers/follow/' + action.payload.userId)
                .then(() => {dispatch(followActions.follow.success)})
                .catch( e => {
                    console.log(e)
                    dispatch(followActions.follow.error)
                })
            return
        case UNFOLLOW_USER:
            deleteRequest('/followers/unfollow/' + action.payload.userId)
                .then(() => {dispatch(followActions.unfollow.success)})
                .catch(e => {
                    console.log(e)
                    dispatch(followActions.unfollow.error)
                })
            return;
        case GET_USER_FOLLOWERS:
            get('/followers/by-user/' + action.payload.userId)
                .then((response) => dispatch(followActions.getUserFollowers.success(response)))
                .catch(e => {
                    console.log(e)
                    dispatch(followActions.getUserFollowers.error())
                })
            return;
        case GET_USER_FOLLOWEDS:
            get('/followers/followed/by-user/:userId' + action.payload.userId)
                .then((response) => dispatch(followActions.getUserFolloweds.success(response)))
                .catch(e => {
                    console.log(e)
                    dispatch(followActions.getUserFolloweds.error())
                })
            return;
        case GET_MY_FOLLOWERS:
            get('/followers/me')
                .then((response) => dispatch(followActions.getMyFollowers.success(response)))
                .catch((e) => console.log(e))
            return;
        case GET_MY_FOLLOWEDS:
            get('/followers/followed/me')
                .then((response) => dispatch(followActions.getMyFolloweds.success(response)))
                .catch((e) => console.log(e))
            return;
    }
}

export default followMiddleware