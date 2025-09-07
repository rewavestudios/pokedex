import type { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]) {
  // Validate that exactly one argument (location name) is provided
  if (args.length !== 1) {
    throw new Error("you must provide a location name");
  }

  const name = args[0];
  // Fetch location data from API (uses caching automatically)
  const location = await state.pokeAPI.fetchLocation(name);

  console.log(`Exploring ${name}...`);
  console.log("Found Pokemon:");
  // Iterate through all pokemon encounters in the location
  for (const enc of location.pokemon_encounters) {
    console.log(` - ${enc.pokemon.name}`);    // Print each Pokemon name
  }
}
