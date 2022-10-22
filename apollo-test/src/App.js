import logo from './logo.svg';
import './App.css';
import Countries from "./components/Countries";
import {useState} from "react";
import Country from "./components/Country";

function App() {
    const [selectedCountry, setSelectedCountry] = useState('')
  return (
      <div>
        <h2>My first Apollo app 🚀</h2>
            <Countries setSelectedCountry={setSelectedCountry}/>
            <Country countryCode={selectedCountry} />
      </div>
  );
}

export default App;
