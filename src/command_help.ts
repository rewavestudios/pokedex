// Import only the type, not the implementation
import type { CLICommand } from "./command.js";

// Implementation of the help command functionality
export function commandHelp(commands: Record<string, CLICommand>) {
  console.log();
  console.log("Welcome to the Pokedex!");
  console.log("Usage:");
  console.log();
  // Dynamically generate help text by iterating through all registered commands
  for (const cmd of Object.values(commands)) {
    console.log(`${cmd.name}: ${cmd.description}`);
  }
  console.log();
}
