import React from 'react';
import { Link } from 'react-router-dom';


export const PokemonIndexItem = ({pokemon}) => {

  return (
      <li>{pokemon.name}
        <Link to={`/pokemon/${pokemon.id}`}>
       <br />
       <img height="60" width="60" src={pokemon.image_url}></img>
     </Link>
      </li>
  );
};
