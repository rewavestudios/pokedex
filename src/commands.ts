// Import command implementations
import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandMapForward, commandMapBack } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";

// Import type only (not executable code)
import type { CLICommand } from "./state.js";   // Import from state.ts

// Central registry of available commands - acts as a command database
export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,  // Points to the actual function in command_help.ts that accepts State
    },
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,  // Points to the actual function in command_exit.ts that accepts State
    },
    map: {
      name: "map",
      description: "Get the next page of locations",
      callback: commandMapForward,    // Map command
    },
    mapb: {
      name: "mapb",
      description: "Get the previous page of locations",
      callback: commandMapBack,       // Map back command
    },
    explore: {
      name: "explore <location_name>",
      description: "Explore a location",
      callback: commandExplore,   // Points to the actual function in command_explore.ts that accepts args
    },
    catch: {
      name: "catch <pokemon_name>",
      description: "Attempt to catch a pokemon",
      callback: commandCatch,   // Points to function that handles catching in command_catch.js
    },
    inspect: {
      name: "inspect <pokemon_name>",
      description: "View details about a caught pokemon",
      callback: commandInspect,   // Points to inspect function
    },
  };
}
// This pattern makes it easy to add/remove commands in one place