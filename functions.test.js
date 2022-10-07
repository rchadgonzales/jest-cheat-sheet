const functions = require("./functions");

// TEST 7
/*
beforeEach(() => initDatabase());
afterEach(() => closeDatabase());
*/
/*
beforeAll(() => initDatabase());
afterAll(() => closeDatabase());
const initDatabase = () => console.log("Database Initialized...");
const closeDatabase = () => console.log("Database Closed...");
*/

// TEST 8
const nameCheck = () => console.log("Checking Name...");

describe("Checking Names", () => {
  beforeEach(() => nameCheck());

  test("User is Richard", () => {
    const user = "Richard";
    expect(user).toBe("Richard");
  });
  test("User is Admin", () => {
    const user = "Admin";
    expect(user).toBe("Admin");
  });
});

// TEST 1 - TOBE
test("Adds 3 + 3 to equal 6", () => {
  expect(functions.add(3, 3)).toBe(6);
});

// TEST 2 - NOTTOBE
test("Adds 3 + 3 to not equal 7", () => {
  expect(functions.add(3, 3)).not.toBe(7);
});

// CHECK FOR TRUTHY AND FALSY VALUES
/*
toBeNull MATCHES ONLY NULL
toBeUndefined MATCHES ONLY UNDEFINED
toBeDefined IS THE OPPOSITE OF toBeUndefined
toBeTruthy MATCHES ANYTHING THAT AN IF STATEMENT TREATS AS TRUE
toBeFalsy MATCHES ANYTHING THAT AN IF STATEMENT TREATS AS FALSE
*/

// TEST 3 - TOBENULL
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// TEST 4 - TOBEFALSY
test("Should be falsy", () => {
  // expect(functions.checkValue(null)).toBeFalsy();
  // expect(functions.checkValue(0)).toBeFalsy();
  expect(functions.checkValue(undefined)).toBeFalsy();
  // expect(functions.checkValue(1)).toBeFalsy(); THE RESULT IS AN ERROR
});

// TEST 5 - TOEQUAL
test("User must be Richard Gonzales object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Richard",
    lastName: "Gonzales",
  });
});

// LESS THAN AND GREATER THAN
test("Should be under 1700", () => {
  const load1 = 800;
  // const load2 = 700;
  // const load2 = 900; THE RESULT IS AN ERROR
  const load2 = 900;
  // expect(load1 + load2).toBeLessThan(1700);
  expect(load1 + load2).toBeLessThanOrEqual(1700);
});

// REGEX OR REGULAR EXPRESSIONS / CASE SENSITIVE
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/);
  // expect("teamI").not.toMatch(/I/); THE RESULT IS AN ERROR
  // expect("teami").not.toMatch(/I/i); THE RESULT IS AN ERROR
});

// ARRAYS
test("Admin should be in usernames", () => {
  usernames = ["chad", "rchad", "admin"];
  // usernames = ["chad", "rchad"]; THE RESULT IS AN ERROR
  expect(usernames).toContain("admin");
});

// TEST 6 - WORKING WITH ASYNC DATA
// PROMISE
/*
test("User fetched name should be Kurtis Weissnat", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    // functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Kurtis Weissnat");
    // expect(data.name).toEqual("Kurtis Weissnatt");
  });
});
*/

// ASYNC AWAIT
test("User fetched name should be Kurtis Weissnat", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Kurtis Weissnat");
});
