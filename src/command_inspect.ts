import type { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]) {
  // Validate that exactly one argument (Pokemon name) is provided
  if (args.length !== 1) {
    throw new Error("you must provide a pokemon name");
  }

  const name = args[0];
   // Check if Pokemon has been caught (exists in caughtPokemon registry)
  const pokemon = state.caughtPokemon[name];
  if (!pokemon) {
    throw new Error("you have not caught that pokemon");
  }

  // Display basic Pokemon information
  console.log("Name:", pokemon.name);
  console.log("Height:", pokemon.height);
  console.log("Weight:", pokemon.weight);
  console.log("Stats:");    // Display all stats with formatted output
  for (const stat of pokemon.stats) {
    console.log(`  -${stat.stat.name}: ${stat.base_stat}`);
  }
  console.log("Types:");
  for (const typeInfo of pokemon.types) {
    console.log("  -", typeInfo.type.name);
  }
}
