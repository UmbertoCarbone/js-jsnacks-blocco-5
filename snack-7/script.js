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


  //Find
const myPerson = students.find((person) => {
  return person.id === 2;

})
console.log(myPerson)

//ciclo for

for (let i = 0; i < students.length;i++) {
const nameDue = students[1]
console.log(nameDue)
break
}



// In sospeso
/* 
 students.forEach((students, id) =>{
  
  console.log(students,id)
})  */


