import {gql, useQuery} from "@apollo/client";
import {EXCHANGE_RATES} from "../index";
import React from "react";

const COUNTRY_NAMES = gql`
  query GetCountryNames {
    countries {
      name
      code
    }
  }
`;

const Countries = ({setSelectedCountry}) => {
    const { loading, error, data } = useQuery(COUNTRY_NAMES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <select name="dog" id="countrySelector" onChange={() => {
            setSelectedCountry(document.getElementById("countrySelector").value)
            console.log(document.getElementById("countrySelector").value)
        }}>
            {data.countries.map(country => (
                <option key={country.name} value={country.code}>
                    {country.name}
                </option>
            ))}
        </select>
    )
}

export default Countries