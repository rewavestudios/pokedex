// Import command implementations
import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandMapForward, commandMapBack } from "./command_map.js";

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
  };
}
// This pattern makes it easy to add/remove commands in one place