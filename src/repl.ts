import { State } from "./state.js";

// Main REPL (Read-Eval-Print Loop) function
export function startREPL(state: State) {   // Accepts State object as parameter
  state.readline.prompt();    // Create readline interface for handling terminal input/output
  state.readline.on("line", async (input) => {
    // Clean and parse user input into individual words
    const words = cleanInput(input);
    // Handle empty input - just show prompt again
    if (words.length === 0) {
      state.readline.prompt();
      return;
    }

    // Extract first word as command name and display it
    const commandName = words[0];
    // Get command registry
    const cmd = state.commands[commandName];
    // Check if command exists
    if (!cmd) {
      console.log(
        `Unknown command: "${commandName}". Type "help" for a list of commands.`,
      );
      state.readline.prompt();
      return;
    }

    try {
      cmd.callback(state);    // Passes entire state object to command callback
    } catch (e) {
      console.log(e);
    }

    // Show prompt again for next command
    state.readline.prompt();
  });
}

// Utility function to sanitize and parse user input
export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()                      // Convert to lowercase for case-insensitive handling
    .trim()                             // Remove leading/trailing whitespace
    .split(" ")                         // Split on spaces - BUT this doesn't handle multiple spaces well
    .filter((word) => word !== "");     // Filter out empty strings from multiple spaces
}
