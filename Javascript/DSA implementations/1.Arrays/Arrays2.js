// Basic Array Methods

const arr = new Array(1, 4, 5, 6, 7, 9, 2);
// Push - Adds an element to the end of the array

arr.push(12);
console.log(arr);
arr.push(14);
console.log(arr);

// Pop - Removes element present at the end of the array
arr.pop();
console.log(arr);

// Unshift - Adds an element at the beginning of the array
arr.unshift(16);
console.log(arr);

// Shift - Removes the first element of the array

arr.shift();
console.log(arr);

// Reverse - Reverses the array

arr.reverse();
console.log(arr);

// Includes - Checks if an element is present in the array

let res = arr.includes(6);
console.log(res);
res = arr.includes(60);
console.log(res);

// Index Of - Returns the index of an element or -1 if the element is not present

res = arr.indexOf(6);
console.log(res);
res = arr.indexOf(60);
console.log(res);

// Slice Method - Returns An Array Of Elements From The Original Array Based On Given Parameters.Original Array Not Affected

const mainArr = new Array(5, 7, 8, 6, 2, 1);
let newArr = mainArr.slice(2, 4);

// First Parameter - Starting Index, Second Parameter - Ending Index, Not Included

console.log(newArr);

// Splice Method - Returns An Array Of Elements From The Original Array Based On Given Parameters.Original Array Is Affected

console.log(mainArr);
newArr = mainArr.splice(2, 3);

// First Parameter - Starting Index, Second Parameter - Number Of Elements Post Starting Index Element Including It.
console.log(newArr);
console.log(mainArr);
