import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;   //  Accepts State object
};

export type State = {
  readline: Interface;    // Contains the readline interface for I/O operations
  commands: Record<string, CLICommand>;   // Registry of all available commands
};

export function initState() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "pokedex > ",
  });

  return {
    readline: rl,
    commands: getCommands(),    // Initializes command registry
  };
}
