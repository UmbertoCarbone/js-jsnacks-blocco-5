const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

//solo console.log
console.log(names)


//ciclo for
  for (let i =0 ; i < names.length;i++) {
  const namesciclofor = names[i]
  console.log(namesciclofor)
} 


//metodo forEach
names.forEach((name) => {
  console.log(name);
});



//metodo map
const namesMap = names.map((name) => {
  console.log(name);
  return name;
});
