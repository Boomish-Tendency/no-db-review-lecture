import React from "react";

const DexPokemon = (props) => {
  return (
    <li
      className="pokemon"
      onClick={() => {
        props.addToTeam(props.pokemon.id);
      }}
    >
      <h1>{props.pokemon.name.english}</h1>
      <h2>{props.pokemon.type[0]}</h2>
      {props.pokemon.type[1] ? <h2>{props.pokemon.type[1]}</h2> : null}
    </li>
  );
};

export default DexPokemon;
