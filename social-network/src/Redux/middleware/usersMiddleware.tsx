import {GET_USERS_REQUEST, usersActions} from "../actions/usersActions.tsx";
import {get} from '../../util/http'

const usersMiddleware = ({dispatch, getState}) => (next) => (action) => {
    next(action)

    switch (action.type) {
        case GET_USERS_REQUEST:
            get('/users')
                .then((response) => {dispatch(usersActions.getUsers.success(response))})
                .catch(e => {console.log(e)})
    }
}

export default usersMiddleware