import type { State } from "./state.js";

export async function commandPokedex(state: State) {
  console.log("Your Pokedex:");
  // Iterate through all caught Pokemon and display their names
  for (const pokemon of Object.values(state.caughtPokemon)) {
    console.log(` - ${pokemon.name}`);
  }
}
