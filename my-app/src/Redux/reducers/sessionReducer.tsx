import {LOGIN_REQUEST, LOGIN_REQUEST_SUCCESS, LOGOUT_REQUEST} from "../actions/actions.tsx";

export interface Session {
    token: string,
    activeUser: string,
}

const initialState: Session = {
    token: '',
    activeUser: '',
}

const sessionReducer = (state = initialState, action) =>  {
    switch (action.type) {
        case LOGIN_REQUEST_SUCCESS: {
            return {
                ...state,
                activeUser: action.payload.username,
                token: action.payload.token,
            }
        }

        case LOGOUT_REQUEST: {
            return {
                ...state,
                token: '',
            }
        }

        default:
            return state;
    }
}

export default sessionReducer