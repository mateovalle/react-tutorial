export const START_FETCH_POKEMON = 'START_FETCH_POKEMON'
export const SUCCESS_FETCH_POKEMON = 'SUCCESS_FETCH_POKEMON'
export const START_FETCH_ITEMS = 'START_FETCH_ITEMS'
export const SUCCESS_FETCH_ITEMS = 'SUCCESS_FETCH_ITEMS'
export const START_FETCH_ITEM_BY_NAME = 'START_FETCH_ITEM_BY_NAME'
export const SUCCESS_FETCH_ITEM_BY_NAME = 'SUCCESS_FETCH_ITEM_BY_NAME'

export const startFetchPokemon = (payload) => {
        return {type: START_FETCH_POKEMON, payload}
}

export const successFetchPokemon = (payload) => {
    return {type: SUCCESS_FETCH_POKEMON, payload}
}

export const startFetchItems = () => {
    return {type: START_FETCH_ITEMS}
}

export const successFetchItems = (payload) => {
    return {type: SUCCESS_FETCH_ITEMS, payload}
}

export const startFetchItemByName = (payload)  => {
    return {type: START_FETCH_ITEM_BY_NAME, payload}
}

export const successFetchItemByName = (payload) => {
    return {type: SUCCESS_FETCH_ITEM_BY_NAME, payload}
}