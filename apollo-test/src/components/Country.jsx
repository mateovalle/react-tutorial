import {gql, useLazyQuery, useQuery} from "@apollo/client";
import React, {useEffect} from "react";
import './Country.css'

const COUNTRY_FULL_DATA = gql`
  query GetCountryData($countryCode: ID!) {
        country(code: $countryCode) {
            code
            name
            native
            phone
            continent {name}
            capital
            currency
            languages {name}
            emoji
            emojiU
            states {name}
        }
  }
`;

const Country = ({countryCode}) => {
    const [getCountry, { loading, error, data }] = useLazyQuery(COUNTRY_FULL_DATA);

    useEffect(() => {
        if (countryCode) getCountry({
            variables: {countryCode},
        })
    },[countryCode])
    console.log(countryCode)
    if (loading) return null
    if (error) return <p>error :(</p>

    return (
        !data? '' :
        <div>
            <h3>{data.code} {data.country.name} {data.country.emoji}</h3>
            <span>Phone: {data.country.phone}</span>
            <span>Continent: {data.country.continent.name}</span>
            <span>Capital: {data.country.capital}</span>
            <span>Currency: {data.country.currency}</span>
            <span>Languages: {data.country.languages.map((language) => {
                return language.name + ' '
            })}</span>
        </div>
    )

}

export default Country