export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()                      // Convert to lowercase for case-insensitive handling
    .trim()                             // Remove leading/trailing whitespace
    .split(" ")                         // Split on spaces - BUT this doesn't handle multiple spaces well
    .filter((word) => word !== "");     // Filter out empty strings from multiple spaces
}
