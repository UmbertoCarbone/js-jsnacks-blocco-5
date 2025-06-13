const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
];

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }


  //Find
const myPerson = students.find((person) => {
  return person.id === 2;

})
console.log(myPerson)

//ciclo for
let foundStudent = null;
for (let i = 0; i < students.length;i++) {
  const student = students[i]

  if (student.id === 2) {
    foundStudent = student
    break
  }
}
console.log(foundStudent)



// In sospeso
 
//   students.forEach((students, id) =>{
  
//   console.log(students,id)
// })  
 

