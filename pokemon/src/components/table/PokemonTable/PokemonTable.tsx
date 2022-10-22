import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import {useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {Box, Collapse, IconButton, Typography} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import PokemonInfoRow from "../pokemonInfoRow/PokemonInfoRow.tsx";
import './PokemonTable.css'
import pokemonLogo from './../../../assets/Pokemon.png'

const PokemonTable = () => {
    const [rows, setRows] = useState([])
    const [next, setNext] = useState('https://pokeapi.co/api/v2/pokemon?limit=' + 40 + '&offset=' + 0)
    const [hasNext, setHasNext] = useState(true)
    useEffect(() => {
        fetchPokemons();
    }, [])

    const fetchPokemons = () => {
        axios.get(next)
            .then((response) => {
                if (response.data.next) {
                    setNext(response.data.next)
                    setRows(rows.concat(response.data.results))
                } else {
                    console.log('setNext false')
                    setHasNext(false)
                }

            })
            .catch(e => {
                console.log(e)
            })
    }

    function Row(props: {row}) {
        const { row } = props;
        const [open, setOpen] = React.useState(false);
        const[isFavourite, setIsFavourite] = useState(false)

        useEffect(() => {
            if (!window.localStorage.getItem('favouritePokemons')) window.localStorage.setItem('favouritePokemons', '')
            if (window.localStorage.getItem('favouritePokemons').includes(row.name)){
                setIsFavourite(true)
            }
        }, [])

        const handleFavourite = () => {
                if (!isFavourite){
                window.localStorage.setItem('favouritePokemons', window.localStorage.getItem('favouritePokemons') + ' ' + row.name)
            } else {
                window.localStorage.setItem('favouritePokemons', window.localStorage.getItem('favouritePokemons').replace(row.name, ''))
            }
            setIsFavourite(!isFavourite)

        }

        return (
            <React.Fragment>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} className={'table-row'}>
                    <TableCell>
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell>
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={handleFavourite}
                        >
                            {isFavourite ? <StarOutlinedIcon /> : <StarBorderOutlinedIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row" >
                        <span className={'pokemon-name'}>{row.name}</span>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography variant="h6" gutterBottom component="div">
                                    <span className={'row-title'}>{row.name}</span>
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                    </TableHead>
                                        {open ? <PokemonInfoRow name={row.name}/> : null}
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </React.Fragment>
        );
    }

    return (
        <div>
            <div>
                <hr />
                <InfiniteScroll
                    dataLength={rows.length}
                    next={fetchPokemons}
                    hasMore={hasNext}
                    loader={<h4>Loading...</h4>}
                >
                    <TableContainer component={Paper}>
                        <Table aria-label="collapsible table" className={'table-container'}>
                            <TableHead>
                                <TableRow>
                                    <TableCell className={'pokemon-title'}><img src={pokemonLogo}/></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <Row key={row.name} row={row} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </InfiniteScroll>
            </div>
        </div>
    );
}

export default PokemonTable;