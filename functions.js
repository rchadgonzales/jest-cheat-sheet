// TEST 0
/*
const functions = {
  // WITH ARROW FUNCTION
  add: (num1, num2) => num1 + num2,
  // WITHOUT ARROW FUNCTION
  add: function(num1, num2){
    return num1 + num2;
  }
}
*/

// TEST 1 AND TEST 2
/*
const functions = {
  // ARROW FUNCTION
  add: (num1, num2) => num1 + num2,
  // add: (num1, num2) => num1 + num2 + 1, THE RESULT IS AN ERROR
};
*/

// TEST 3
/*
const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  // isNull: () => undefined, THE RESULT IS AN ERROR
};
*/

// TEST 4
/*
const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
};
*/

// TEST 5
/*
const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: "Richard" };
    user["lastName"] = "Gonzales";
    return user;
  },
};
*/

const { default: axios } = require("axios");
// const axios = require("axios");

// TEST 6
const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: "Richard" };
    user["lastName"] = "Gonzales";
    return user;
  },
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/7")
      .then((res) => res.data)
      .catch((err) => "error"),
};

module.exports = functions;
