const reverseString = require("./reversestring");

// TEST 1
test("reverseString function exists", () => {
  expect(reverseString).toBeDefined();
});

// TEST 2
test("String reverses", () => {
  expect(reverseString("hi")).toEqual("ih");
});

// TEST 3
test("String reverses with uppercase", () => {
  expect(reverseString("Hi")).toEqual("ih");
});
