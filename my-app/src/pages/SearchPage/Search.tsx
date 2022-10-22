import SearchBar from "../../components/SearchBar/SearchBar.tsx";
import { useState} from "react";
import Profiles from "../ProfilesPage/Profiles.tsx";

const Search = () => {
    const searchParams = new URLSearchParams(window.location.search)
    const query = searchParams.get("s")

    const [searchQuery, setSearchQuery] = useState(query || '')

    return(
        <div>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <Profiles usernameQuery={searchQuery} />
        </div>

    )
}

export default Search;