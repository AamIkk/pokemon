import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../store/slices/pokemonSlices';
import styles from './Pokemon.module.css';

const PokemonList = () => {
  const dispatch = useDispatch();
  const { pokemons, loading, error } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <div>
      <h1>Pokemon List</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul className={styles.pokemonList}>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name} className={styles.pokemonItem}>
            <img src={pokemon.image} alt={pokemon.name} className={styles.pokemonImage} />
            <span className={styles.pokemonName}>{pokemon.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
