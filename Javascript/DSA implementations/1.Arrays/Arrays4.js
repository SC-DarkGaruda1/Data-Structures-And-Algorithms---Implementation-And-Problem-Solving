// Implement a function createOddNumbersArray(n) that takes a positive integer n and returns an array containing the first n odd numbers.

const createOddNumbersArray = (n) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(2 * i + 1);
  }

  return arr;
};

console.log(createOddNumbersArray(5));
