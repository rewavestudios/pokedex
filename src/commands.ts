// Import command implementations
import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
// Import type only (not executable code)
import type { CLICommand } from "./command.js";

// Central registry of available commands - acts as a command database
export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,  // Points to the actual function in command_help.ts
    },
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,  // Points to the actual function in command_exit.ts
    },
  };
}
// This pattern makes it easy to add/remove commands in one place