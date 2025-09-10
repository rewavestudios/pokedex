import type { State } from "./state.js";

// Implementation of the exit command functionality
export async function commandExit(state: State) {   // Accepts State parameter
  console.log("Closing the Pokedex... Goodbye!");
  state.readline.close();   // Properly closes readline interface before exit
  state.pokeAPI.closeCache();   // Properly shutdown cache cleanup intervals
  process.exit(0);  // Immediately terminates the Node.js process with success code (0)
}
