import {GET_USERS_SUCCESS} from "../actions/usersActions.tsx";

const initialState = {
    allUsers: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return {
                ...state,
                allUsers: action.payload,
            }
        default:
            return state;
    }
}

export default usersReducer