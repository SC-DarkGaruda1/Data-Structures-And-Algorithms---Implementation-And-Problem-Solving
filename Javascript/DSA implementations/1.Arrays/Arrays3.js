// Nested Arrays
const russianFighterJets = [
  "Mig 29 Fulcrum",
  "Sukhoi SU-30 MKI Flanker-E",
  "Sukhoi SU-57 Felon",
  "Sukhoi SU-35 Super Flanker",
  "Mig 31 Foxhound",
];

const europeanFighterJets = [
  "Dassault Mirage 2000",
  "Dassault Rafale",
  "Dassault Mystere",
  "Eurofighter Typhoons",
];

const americanFighterJets = [
  "F/A-18 Super Hornet",
  "F-16 Viper",
  "F-15 Strike Eagle",
  "F-22 Raptor",
];

russianFighterJets.push(americanFighterJets);

console.log(russianFighterJets);

// Accessing Elements  In Nested Array

console.log(russianFighterJets[5][2]);

// Concatenation

const newArr = europeanFighterJets.concat(americanFighterJets);
console.log(newArr);

let westernFighterJets = [americanFighterJets, europeanFighterJets];
console.log(westernFighterJets);

// Flat Operator

console.log(westernFighterJets.flat());

// Spread Operator

westernFighterJets = [...europeanFighterJets, ...americanFighterJets];

console.log(westernFighterJets);

// Flat Operator
