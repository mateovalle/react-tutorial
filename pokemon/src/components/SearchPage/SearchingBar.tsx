import './SearchingBar.css'
import {Box, TextField} from "@mui/material";
import * as React from "react";

const SearchingBar = (props) => {
    return(
        <div className={'search-container'}>
                <input className={'search-input'} onInput={e => props.setSearchQuery(e.target.value)} value={props.searchQuery} label={'Search...'}/>
        </div>
    )
}

export default SearchingBar;