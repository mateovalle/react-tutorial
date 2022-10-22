import logo from './logo.svg';
import './App.css';
import PokemonTable from "./components/table/PokemonTable/PokemonTable.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar/Navbar.tsx";
import SearchPage from "./components/SearchPage/SearchPage.tsx";
import FavouritesPage from "./components/FavouritesPage/FavouritesPage.tsx";

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PokemonTable />} />
          <Route path="/items" element={<SearchPage />}/>
          <Route path="/favourites" element={<FavouritesPage />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
