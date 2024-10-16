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

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }


// con find

const student = students.find(student => student.id === 2);

console.log(student);


// con ciclo for

let student_for;

for (let i = 0; i < students.length; i++) {

  if (students[i].id === 2) {

    student_for = students[i];

    break;
  }
}

console.log(student_for); 