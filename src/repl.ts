import { createInterface } from "readline";

// Main REPL (Read-Eval-Print Loop) function
export function startREPL() {
  // Create readline interface for handling terminal input/output
  const rl = createInterface({
    input: process.stdin,       // Standard input stream (keyboard)
    output: process.stdout,     // Standard output stream (terminal display)
    prompt: "pokedex > ",       // Custom command prompt text
  });

  // Display initial prompt to user
  rl.prompt();

  // Set up event listener for line input (when user presses Enter)
  rl.on("line", async (input) => {
    // Clean and parse user input into individual words
    const words = cleanInput(input);
    // Handle empty input - just show prompt again
    if (words.length === 0) {
      rl.prompt();
      return;
    }

    // Extract first word as command name and display it
    const commandName = words[0];
    console.log(`Your command was: ${commandName}`);
    // Show prompt again for next command
    rl.prompt();
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
