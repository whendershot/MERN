import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Pokemon = (props) => {

    const [res, setRes] = useState(null);
    useEffect(() =>
    {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1126').then(response => {console.log(response.data); setRes(response.data.results);})
    }, []);

    const renderOne = (pokemon, index) => {
        return (
            <li key={index}>
                {pokemon.name}
            </li>
        );
    };

    return (
        <div className="container">
            <p>Pokemon Names!</p>
            <div className="row">
                <ul>
                { res.map( (pokemon, index) => renderOne(pokemon, index) )}
                </ul>
            </div>
        </div>
    );
};


export default Pokemon;