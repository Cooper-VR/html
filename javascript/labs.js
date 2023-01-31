// JSF1 Coding Challenge #1

let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 82;
let johnHeight = 1.95;

let markBMI = markWeight / (Math.pow(markHeight, 2));
let johnBMI = johnWeight / (Math.pow(johnHeight, 2));

let markHigherBMI;

if (markBMI > johnBMI){
    markHigherBMI = true;
}
else{
    markHigherBMI = false;
}

console.log("Set 1:")

console.log(markBMI);
console.log(johnBMI);
console.log("mark highter: " + markHigherBMI);

markWeight = 95;
markHeight = 1.88;

johnWeight = 85
johnHeight = 1.76

markBMI = markWeight / (Math.pow(markHeight, 2));
johnBMI = johnWeight / (Math.pow(johnHeight, 2));

if (markBMI > johnBMI){
    markHigherBMI = true;
}
else{
    markHigherBMI = false;
}
console.log("Set 2");

console.log(markBMI);
console.log(johnBMI);
console.log("mark highter: " + markHigherBMI);

// Coding Challenge #2

let markMass = 78;
let markTall = 1.69;

let johnMass = 82;
let johnTall = 1.95;

let MarkBMI = markMass / (Math.pow(markTall, 2));
let JohnBMI = johnMass / (Math.pow(johnTall, 2));

let higher;
console.log("Set 1:")
if (MarkBMI > JohnBMI){
    higher = `Mark's BMI (${MarkBMI}) is higher than John's BMI (${JohnBMI})!`;
    console.log(higher);
}
else{
    higher = `John's BMI (${JohnBMI}) is higher than Mark's BMI (${MarkBMI})!`;
    console.log(higher);
}



markMass = 95;
markTall = 1.88;

johnMass = 85
johnTall = 1.76

MarkBMI = markMass / (Math.pow(markTall, 2));
JohnBMI = johnMass / (Math.pow(johnTall, 2));
console.log("Set 2");
if (MarkBMI > JohnBMI){
    higher = `Mark's BMI (${MarkBMI}) is higher than John's BMI (${JohnBMI})!`;
    console.log(higher);
}
else{
    higher = `John's BMI (${JohnBMI}) is higher than Mark's BMI (${MarkBMI})!`;
    console.log(higher);
}

