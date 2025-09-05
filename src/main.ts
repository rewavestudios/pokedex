import { startREPL } from "./repl.js";
import { initState } from "./state.js";

// Main application entry point function
async function main() {
  const state = initState();
  await startREPL(state);  // Initialize and start the REPL interface
}

main();   // Execute main function to launch the application