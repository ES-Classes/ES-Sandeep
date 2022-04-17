let prabinMass = 50;
let ramMass = 56;

let prabinHeight = 145;
let ramHeight = 136;

let prabinsBMI = prabinMass / (prabinHeight * prabinHeight)
let ramBMI = ramMass / (ramMass * ramMass)

let prabinHigherBMi = prabinsBMI > ramBMI;

console.log(prabinsBMI);
console.log(ramBMI);

console.log(prabinHigherBMi);