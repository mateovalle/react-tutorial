import {SUCCESS_FETCH_POKEMON} from "../actions.tsx";

const initialState = {
    loadedPokemons: []
}

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_FETCH_POKEMON:
            return{
                ...state,
                loadedPokemons: [action.payload, ...state.loadedPokemons],
            }
        default:
            return state;
    }
}

export default pokemonReducer;