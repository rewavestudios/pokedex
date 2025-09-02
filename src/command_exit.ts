// Implementation of the exit command functionality
export function commandExit() {
  console.log("Closing the Pokedex... Goodbye!");
  process.exit(0);  // Immediately terminates the Node.js process with success code (0)
}
