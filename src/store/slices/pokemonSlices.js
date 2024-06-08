import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPokemons = createAsyncThunk('pokemon/fetchPokemons', async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
  const pokemons = response.data.results;

  const pokemonWithImages = await Promise.all(pokemons.map(async pokemon => {
    const pokemonResponse = await axios.get(pokemon.url);
    return {
      name: pokemon.name,
      image: pokemonResponse.data.sprites.front_default
    };
  }));

  return pokemonWithImages;
});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemons: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.loading = false;
        state.pokemons = action.payload;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default pokemonSlice.reducer;
