import {START_FETCH_POKEMON, successFetchPokemon} from "../actions.tsx";
import axios from "axios";


const pokemonMiddleware = ({dispatch}) => (next) => (action) => {
    next(action)

    switch (action.type) {
        case START_FETCH_POKEMON:
            console.log('start fetch pokemon')
            axios.get('https://pokeapi.co/api/v2/pokemon/' + action.payload.name)
                .then(response => {
                    console.log('success fetch pokemon')
                    dispatch(successFetchPokemon(response.data))
                })
                .catch(e => console.log(e))
    }

}

export default pokemonMiddleware;