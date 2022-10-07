const isAnagram = require("./anagram");

// TEST 1
test("isAnagram function exists", () => {
  expect(typeof isAnagram).toEqual("function");
});

// TEST 2
test('"cinema" is an anagram of "iceman"', () => {
  expect(isAnagram("cinema", "iceman")).toBeTruthy();
});

test('"team" is an anagram of "meat"', () => {
  expect(isAnagram("team", "meat")).toBeTruthy();
});

// TEST 3
test('"Dormitory" is an anagram of "dirty room##"', () => {
  expect(isAnagram("Dormitory", "dirty room##")).toBeTruthy();
});

// TEST 4
test('"Hello" is NOT an anagram of "Aloha"', () => {
  expect(isAnagram("Hello", "Aloha")).toBeFalsy();
});
