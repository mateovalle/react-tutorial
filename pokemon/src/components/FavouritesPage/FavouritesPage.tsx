import {useEffect, useState} from "react";
import PokemonCard from "../pokemonCard/PokemonCard.tsx";
import './FavouritesPage.css'

const FavouritesPage = () => {
    const [favourites, setFavourites] = useState([])

    console.log(favourites)
    useEffect(() => {
        if (!window.localStorage.getItem('favouritePokemons')) {
            window.localStorage.setItem('favouritePokemons', '')
        }
        const filtered = window.localStorage.getItem('favouritePokemons').split(' ').filter(function(value, index, arr){
            return value != '';
        });
        setFavourites(filtered)
    }, [])

    return(
        <div className={'cards-container'}>
            {favourites.map(favourite => {
                return <div className={'card-holder'}><PokemonCard name={favourite}/></div>;
            })}
        </div>
    );
}

export default FavouritesPage;