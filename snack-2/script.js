const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'


// con forEach
people.forEach(person => {
  console.log(person.name);
});

// con ciclo for

for (let i = 0; i < people.length; i++) {
  let person = peapole[i]
  console.log(person.name);
}