import {combineReducers} from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonReducer.tsx";
import itemReducer from "./ItemReducer.tsx";


const rootReducer = combineReducers({
    pokemons: pokemonReducer,
    items: itemReducer,
})

export default rootReducer