import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";     // Import PokeAPI

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;   //  Accepts State object
};

export type State = {
  readline: Interface;    // Contains the readline interface for I/O operations
  commands: Record<string, CLICommand>;   // Registry of all available commands
  pokeAPI: PokeAPI;           // API client instance
  nextLocationsURL: string;   // Pagination state
  prevLocationsURL: string;   // Pagination state
};

export function initState(cacheInterval: number) {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "pokedex > ",
  });

  return {
    readline: rl,
    commands: getCommands(),    // Initializes command registry
    pokeAPI: new PokeAPI(cacheInterval),     // Initialize API client
    nextLocationsURL: "",       // Initialize pagination state
    prevLocationsURL: "",       // Initialize pagination state
  };
}
