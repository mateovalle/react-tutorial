import pokemonMiddleware from "./middleware/PokemonMiddleware.tsx";
import {applyMiddleware, createStore} from "@reduxjs/toolkit";
import rootReducer from "./reducer/rootReducer.tsx";
import thunk from "redux-thunk";
import itemMiddleware from "./middleware/ItemMiddleware.tsx";


const store = createStore(rootReducer, applyMiddleware(thunk, pokemonMiddleware, itemMiddleware))

export default store;