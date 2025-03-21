// Spread Operator

const jetDetails = {
  model: "SU-30",
  variant: "MKI",
  manufacturer: "HAL",
  generation: 4,
  engine: 2,
};

const weaponDetails = {
  hardpoints: 13,
  missiles: ["Astra BVR", "Brahmos NG", "R-27", "R-77", "R-73"],
  radar: "Virupaksh",
};

// const data = { jetDetails, weaponDetails };

const data = { ...jetDetails, ...weaponDetails };

console.log(data);

// Get All Object Keys

console.log(Object.keys(data));
console.log(Object.values(data));
console.log(Object.entries(data));


// Check if object has a property

console.log(data.hasOwnProperty('radar'));


