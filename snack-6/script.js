const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.


//Ciclo for con 2 console log diversi
//riga 26 zucchine 15 cm+
//riga 23 zucchine 15cm-
for (let i = 0; i < zucchine.length; i++) {
 if
 (zucchine[i].length >= 15 ){
  console.log(zucchine[i])

 } else if (zucchine[i].length < 15){  
  console.log(zucchine[i])}
}


//ciclo for di un array  con zucchine 15 cm+
for (let i = 0;i < zucchine.length; i++) {
  if (zucchine[i].length >=15) {
    console.log(zucchine[i])
  }
}

//ciclo for con un array con zucchine 15-
for (let i =0;i < zucchine.length;i++) {
  if (zucchine[i].length < 15) {
    console.log(zucchine[i])
  }
}

//forEach con 2 console log diversi 
//riga 49 zucchine 15 cm+
//riga 51 zucchine 15cm-
zucchine.forEach((zucchina) => {
  if (zucchina.length >= 15) {
    console.log(zucchina);
  } else {
    console.log(zucchina);
  }
}
);

//forEach con un array con zucchine 15 cm+
zucchine.forEach((zucchina) => {
  if (zucchina.length >= 15) {
    console.log(zucchina);
  }
}
);

//forEach con un array con zucchine 15-
zucchine.forEach((zucchina) => {
  if (zucchina.length < 15) {
    console.log(zucchina);
  }
}
);


//filter con zucchine 15 cm+
const zucchineLunghe = zucchine.filter((zucchina) => zucchina.length >= 15);
console.log(zucchineLunghe);

//filter con zucchine 15-
const zucchineCorte = zucchine.filter((zucchina) => zucchina.length < 15);
console.log(zucchineCorte);

//map solo con le zucchine più lunghe di 15 cm
const zucchineLungheMap = zucchine.map((zucchina) => {
  if (zucchina.length >= 15) {
    return zucchina;
  }
})
console.log(zucchineLungheMap)