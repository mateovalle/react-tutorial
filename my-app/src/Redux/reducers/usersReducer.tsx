import {SUCCESS_FETCH_PROFILES} from "../actions/actions.tsx";

export class UserPreview{
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
}

export interface Users {
    users: UserPreview[]
}

const initialState: Users = {
    users: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_FETCH_PROFILES:
            console.log(action)
            return {
                ...state,
                users: action.payload,
            }

        default:
            return state;
    }
}

export default usersReducer;