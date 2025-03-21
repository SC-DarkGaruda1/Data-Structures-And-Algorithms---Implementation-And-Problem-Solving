const person = {
  name: `John Doe`,
  age: 30,
  isAdmin: true,
  address: {
    street: `123 Main Street`,
    city: `Boston`,
    state: `MA`,
  },
};

// Accessing Properties
console.log(person);
console.log(person.name, person["name"]);
console.log(person.address["street"]);

// Deleting A Field
delete person.address;

// Adding A Field

person.hasChildren = true;

console.log(person);
