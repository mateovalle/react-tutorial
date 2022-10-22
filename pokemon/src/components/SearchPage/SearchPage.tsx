import React, {useState} from "react"
import SearchingBar from "./SearchingBar.tsx";
import ItemIconsPage from "./ItemIconsPage.tsx";

const SearchPage = () => {
    const searchParams = new URLSearchParams(window.location.search)
    const query = searchParams.get('s')

    const [searchQuery, setSearchQuery] = useState(query || '')

    return(
        <div>
            <SearchingBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <ItemIconsPage itemNameQuery={searchQuery} />
        </div>

    )
}
export default SearchPage;