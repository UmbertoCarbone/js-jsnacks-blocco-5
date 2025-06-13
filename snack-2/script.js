const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

console.log(people);
//ciclo for
for (let i = 0; i < people.length; i++) {
  const person = people[i];
  console.log(person.name);
}

// metodo forEach
people.forEach((soloName) => {
  console.log(soloName.name);
})

// metodo map
const namesMap = people.map((person) => {
  console.log(person.name);
  return person.name;
});   


// metodo filter
const namesFilter = people.filter((person) => {
  console.log(person.name);
  return person.name;
});   

//




