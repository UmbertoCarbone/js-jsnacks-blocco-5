const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    console.log(nums[i]);
  }
}



//Filter + if
let numbPariAbb2 = nums.filter((nums)=>{
if (nums % 2 === 0) {
    return true;
}
return false;

})

console.log(numbPariAbb2)


//filter abbreviato (Credo?)
 const numbPariAbb = nums.filter((num) => num % 2 === 0);
console.log(numbPariAbb); 

//foreach

nums.forEach((nums)=>{  
  if (nums % 2 === 0) {
    console.log(nums);
  }
  
  
})

