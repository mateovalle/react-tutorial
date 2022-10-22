import {CircularProgress, TableCell, TableRow, TableBody} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {startFetchPokemon} from "../../../redux/actions.tsx";
import './pokemonInfoRow.css';




const PokemonInfoRow = ({name}) => {
    const findName = (pokemonData) => {
        return pokemonData.name === name;
    }
    const pokemonData = useSelector((state) => {return state.pokemons.loadedPokemons.find(findName)})
    const dispatch = useDispatch()

    useEffect(() => {
        if (!pokemonData){
            dispatch(startFetchPokemon({name: name,pokemonData: pokemonData}))
        }
    }, [name, pokemonData])

    return (
        pokemonData ?
            <TableBody className={'table-body'}>
                <TableRow className={'table-row'}>
                    <TableCell className={'table-cell'}><img className={'sprites'} src={pokemonData.sprites.front_default}/></TableCell> <TableCell className={'table-cell'}><img className={'sprites'}src={pokemonData.sprites.back_default}/></TableCell>
                </TableRow>
                <TableRow className={'table-row'}>
                    <TableCell className={'table-cell'}>Weight: {pokemonData.weight}</TableCell><TableCell className={'table-cell'}>Height: {pokemonData.height}</TableCell>
                </TableRow>
                <TableRow className={'table-row'}>
                    <TableCell className={'table-cell'}>Types: {pokemonData.types.map((type) => type.type.name + ' ')}</TableCell> <TableCell className={'table-cell'}>Abilities: {pokemonData.abilities.map((ability) => ability.ability.name + ' ')}</TableCell>
                </TableRow>
            </TableBody>
            : <TableRow className={'table-row'}><TableCell className={'table-cell'}><CircularProgress /></TableCell></TableRow>
    )
}

export default PokemonInfoRow;