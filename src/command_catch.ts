import type { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]) {
  // Validate that exactly one argument (Pokemon name) is provided
  if (args.length !== 1) {
    throw new Error("you must provide a pokemon name");
  }

  const name = args[0];
  // Fetch Pokemon data from API (uses caching automatically)
  const pokemon = await state.pokeAPI.fetchPokemon(name);

  // Calculate catch chance based on base_experience (higher = harder to catch)
  console.log(`Throwing a Pokeball at ${pokemon.name}...`);

  const res = Math.floor(Math.random() * pokemon.base_experience);
  if (res > 40) {   // Threshold for catch success
    console.log(`${pokemon.name} escaped!`);
    return;
  }

  // Successful catch - add to Pokedex
  console.log(`${pokemon.name} was caught!`);
  console.log("You may now inspect it with the inspect command.");
  state.caughtPokemon[pokemon.name] = pokemon;    // Store caught Pokemon in state
}
