import axios from "axios";

export const getPokemon = async () => {
    // dispatch(setLoading(true))
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await response.data;
    return data;
    // dispatch(getPokemonsWithDetails(data));
    // dispatch(setLoading(false))
}


export const getPokemonDetails = async (pokemon) => {
    const response = await axios.get(pokemon.url);
    const data = await response.data;
    return data;
}