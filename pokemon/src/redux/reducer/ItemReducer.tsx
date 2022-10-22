import {SUCCESS_FETCH_ITEM_BY_NAME, SUCCESS_FETCH_ITEMS} from "../actions.tsx";

const initialState = {
    allItems: [],
    loadedItems: [],
}

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_FETCH_ITEMS:
            return{
                ...state,
                allItems: action.payload,
            }
        case SUCCESS_FETCH_ITEM_BY_NAME:
            return {
                ...state,
                loadedItems: [action.payload, ...state.loadedItems]
            }
        default:
            return state;
    }
}

export default itemReducer;