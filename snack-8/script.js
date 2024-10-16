const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'


// con find
const student = students.find(student => student.name === 'Marco Lanci');

console.log(student.class);

// con ciclo for


let student_for
for (let i = 0; i < students.length; i++) {
  const student_for = students[i];
  if(student_for.name === 'Marco Lanci'){
    console.log(student_for.class);
    
  }
  
}