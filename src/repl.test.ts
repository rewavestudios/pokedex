import { cleanInput } from "./repl.js";
import { describe, expect, test } from "vitest";

describe.each([
  {
    input: "  ",                      // Test: Only whitespace → should return empty array
    expected: [],
  },
  {
    input: "  hello  ",               // Test: Word with surrounding spaces → single element
    expected: ["hello"],
  },
  {
    input: "  hello  world  ",        // Test: Multiple words with extra spaces
    expected: ["hello", "world"],
  },
  {
    input: "  HellO  World  ",        // Test: Mixed case input → should lowercase
    expected: ["hello", "world"],
  },
])("cleanInput($input)", ({ input, expected }) => {
  test(`Expected: ${expected}`, () => {
    const actual = cleanInput(input);
    expect(actual).toHaveLength(expected.length);       // Check array length matches
    for (const i in expected) {                         // Check each element matches
      expect(actual[i]).toBe(expected[i]);
    }
  });
});
