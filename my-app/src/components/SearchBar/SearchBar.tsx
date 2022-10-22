import './SearchBar.css'
import {Box, TextField} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as React from "react";

const SearchBar = (props) => {

    return(
        <div>

            <Box className={'search-container'}>
                <TextField className={'search-input'} onInput={e => props.setSearchQuery(e.target.value)} value={props.searchQuery} id="input-with-sx" label={<FontAwesomeIcon icon={faMagnifyingGlass} />} variant="standard"/>
            </Box>
        </div>
    )
}

export default SearchBar;