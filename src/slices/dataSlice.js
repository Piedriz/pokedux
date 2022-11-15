import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from "./uiSlice";
import { getPokemonDetails } from "../api";
import { getPokemon } from "../api";

const initialState = {
    pokemons: [],
    pokemonsFiltered: [],
}

export const fetchPokemonWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, { dispatch }) => {
        dispatch(setLoading(true));
        const pokemonRes = await getPokemon();
        const pokemonDetailed = await Promise.all(
            pokemonRes.results.map(pokemon => getPokemonDetails(pokemon))
        );
        dispatch(setPokemons(pokemonDetailed));
        dispatch(setLoading(false))
    }
);
export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
            state.pokemonsFiltered = action.payload;
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex = state.pokemons.findIndex(pokemon => {
                return pokemon.id === action.payload
            })

            const currentFilteredPokemonIndex = state.pokemonsFiltered.findIndex(pokemon => {
                return pokemon.id === action.payload
            })

            if (currentPokemonIndex >= 0) {
                const isFavorite = state.pokemons[currentPokemonIndex].favorite

                state.pokemons[currentPokemonIndex].favorite = !isFavorite
            }

            if (currentFilteredPokemonIndex >= 0) {
                const isFavorite = state.pokemonsFiltered[currentFilteredPokemonIndex].favorite

                state.pokemonsFiltered[currentFilteredPokemonIndex].favorite = !isFavorite
            }
        },
        setFilter: (state, action) => {
            const pokemonsFiltered = state
                .pokemons
                .filter(pokemon => pokemon.name.includes(action.payload))
            state.pokemonsFiltered = pokemonsFiltered;
        }
    },
});


export const { setFavorite, setPokemons, setFilter } = dataSlice.actions;
export default dataSlice.reducer