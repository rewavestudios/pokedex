import type { State } from "./state.js";

// Implementation of the help command functionality
export async function commandHelp(state: State) {   // Accepts State parameter
  console.log();
  console.log("Welcome to the Pokedex!");
  console.log("Usage:");
  console.log();
  // Dynamically generate help text by iterating through all registered commands
  for (const cmd of Object.values(state.commands)) {    // Uses state.commands
    console.log(`${cmd.name}: ${cmd.description}`);
  }
  console.log();
}
