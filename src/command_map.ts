import type { State } from "./state.js";

export async function commandMapForward(state: State) {
  // Fetches next page of locations using stored URL (empty string for first page)
  const locations = await state.pokeAPI.fetchLocations(state.nextLocationsURL);

  // Updates state with new pagination URLs for next/previous navigation
  state.nextLocationsURL = locations.next;
  state.prevLocationsURL = locations.previous;

  // Prints all location names from the current page
  for (const loc of locations.results) {
    console.log(loc.name);
  }
}

export async function commandMapBack(state: State) {
  // Checks if there's a previous page to navigate to
  if (!state.prevLocationsURL) {
    throw new Error("you're on the first page");
  }

  // Fetches previous page of locations
  const locations = await state.pokeAPI.fetchLocations(state.prevLocationsURL);

  // Updates state with new pagination URLs
  state.nextLocationsURL = locations.next;
  state.prevLocationsURL = locations.previous;

  // Prints all location names from the previous page
  for (const loc of locations.results) {
    console.log(loc.name);
  }
}
