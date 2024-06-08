import { configureStore } from "@reduxjs/toolkit";
import pokemonSlices from "./slices/pokemonSlices";


const store=configureStore({
    reducer:{
        pokemon:pokemonSlices,
    }
})

export default store;