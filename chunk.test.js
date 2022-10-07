const chunkArray = require("./chunk");

// TEST 1
test("chunkArray function exists", () => {
  expect(chunkArray).toBeDefined();
});

// TEST 2
test("Chunk an array of 10 values with length of 3", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const len = 3;
  const chunkedArr = chunkArray(numbers, len);

  expect(chunkedArr).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
  ]);
});

// TEST 3
test("Chunk an array of 3 values with length of 1", () => {
  const numbers = [1, 2, 3];
  const len = 1;
  const chunkedArr = chunkArray(numbers, len);

  expect(chunkedArr).toEqual([[1], [2], [3]]);
});
