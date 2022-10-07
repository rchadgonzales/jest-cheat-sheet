const chunkArray = (arr, len) => {
  // INIT CHUNKED ARR
  const chunkedArr = [];

  // LOOP THROUGH ARR
  arr.forEach((val) => {
    // GET LAST ELEMENT
    const last = chunkedArr[chunkedArr.length - 1];
    // const last = chunkedArr[chunkedArr.length - 2]; THE RESULT IS AN ERROR

    // CHECK IF LAST AND IF LAST LENGTH IS EQUAL TO THE CHUNK LEN
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
};

module.exports = chunkArray;
