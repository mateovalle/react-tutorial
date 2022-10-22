import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CircularProgress, TableCell, TableRow} from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {startFetchPokemon} from "../../redux/actions.tsx";
import './PokemonCard.css'

export default function PokemonCard({name}) {
    const [shiny, setShiny] = useState(false);
    const findName = (pokemonData) => {
        return pokemonData.name === name;
    }
    const pokemonData = useSelector((state) => {return state.pokemons.loadedPokemons.find(findName)})
    const dispatch = useDispatch()

    useEffect(() => {
        if (!pokemonData){
            dispatch(startFetchPokemon({name: name,pokemonData: pokemonData}))
        }
    }, [])

    return (
        pokemonData ?
            <Card sx={{ maxWidth: 345 }} className={'card-container'} onClick={() => setShiny(!shiny)}>
                <CardActionArea>
                    <CardMedia
                        className={'card-picture'}
                        component="img"
                        height="140"
                        image={shiny ? pokemonData.sprites.back_default : pokemonData.sprites.front_default}
                        alt={pokemonData.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {pokemonData.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <b>Types:</b> {pokemonData.types.map((type) => type.type.name + ' ')}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <b>Abilities:</b> {pokemonData.abilities.map((ability) => ability.ability.name + ' ')}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <b>Height:</b> {pokemonData.height}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <b>Weight:</b> {pokemonData.weight}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <b>Stats: </b>
                            {pokemonData.stats.map((stat) => stat.stat.name + ': ' + stat.base_stat + '/ ')}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            : <TableRow className={'table-row'}><TableCell className={'table-cell'}><CircularProgress /></TableCell></TableRow>
    );
}