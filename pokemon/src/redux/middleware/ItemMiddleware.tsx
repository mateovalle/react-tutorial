import {START_FETCH_ITEM_BY_NAME, START_FETCH_ITEMS, successFetchItemByName, successFetchItems} from "../actions.tsx";
import axios from "axios";


const itemMiddleware = ({dispatch}) => (next) => (action) => {
    next(action)

    switch (action.type) {
        case START_FETCH_ITEMS:
            axios.get('https://pokeapi.co/api/v2/item?limit=400')
                .then(response => dispatch(successFetchItems(response.data.results)))
                .catch(e => console.log(e))
            return;
        case START_FETCH_ITEM_BY_NAME:
            axios.get('https://pokeapi.co/api/v2/item/' + action.payload.name)
                .then(response => dispatch(successFetchItemByName(response.data)))
                .catch(e => console.log(e))
            return;
    }
}

export default itemMiddleware;