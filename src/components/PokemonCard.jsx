import React from 'react'
import { useDispatch } from 'react-redux'
import { Card } from 'antd'
import { StarButton } from './StarButton'
import { setFavorite } from '../slices/dataSlice'


export const PokemonCard = ({ pokemon }) => {
    const dispatch = useDispatch()

    const handleOnFavorite = () =>{
        dispatch(setFavorite(pokemon.id));
    }
    return (
        <Card
            title={pokemon.name}
            cover={<img src={pokemon.sprites.front_default} alt={pokemon.name} />}
            extra={<StarButton isFavorite={pokemon.favorite} onClick={handleOnFavorite} />}
        >
            <Card.Meta description={pokemon.types.map(poke => poke.type.name).join(' - ')}/>
        </Card>
    )
}   
