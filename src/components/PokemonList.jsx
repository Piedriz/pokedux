import React from 'react'
import { PokemonCard } from './PokemonCard'
import '../styles/pokemonlist.css'

export const PokemonList = ({ pokemons }) => {
    return (
        <div className='PokemonList'>
            {pokemons.map(pokemon => {
                return (<PokemonCard key={pokemon.id} pokemon={pokemon} />)
            })}
        </div>
    )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill(0)
}
