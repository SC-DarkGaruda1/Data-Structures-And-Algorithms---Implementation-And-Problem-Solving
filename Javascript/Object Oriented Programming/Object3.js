// Destructuring
const [first, second, ...third] = [12, 34, 15, 18, 19];

console.log(first);
console.log(third);

const userData = {
  id: "001345",
  name: "Sagnik",
  nationality: "India",
  status: "active",
};

// Destructuring Objects

const { id, ...remaining } = userData;
console.log(id, remaining);

// Destructuring With Renaming
const { id: code} = userData;
console.log(code);
