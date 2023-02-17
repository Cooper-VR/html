// jshint esversion: 6

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

console.log("Set 1:");

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

// Coding Challenge #1

let dolphinScore;
let KoalasScore;
let dolphinAvg = 0;
let KoalasAvg = 0;
let dolphineWin = false;

dolphinScore = [96, 108, 89];
KoalasScore = [88, 91, 110];

for (let i = 0; i < dolphinScore.length; i++){
    console.log(dolphinScore[i]);
    dolphinAvg += dolphinScore[i];
}
dolphinAvg /= dolphinScore.length

for (let i = 0; i < KoalasScore.length; i++){
    KoalasAvg += KoalasScore[i];
}
KoalasAvg /= KoalasScore.length

console.log(`dolphine average ${dolphinAvg}`);
console.log(`Koalas average ${KoalasAvg}`);

dolphineWin = dolphinAvg > KoalasAvg;

if (dolphineWin == true && dolphinAvg > 100){
    console.log("dolphines won");
}
else if (dolphineWin == false && KoalasAvg > 100){
    console.log("Koalas won");
}
else if (dolphineWin == true && dolphinAvg <= 100){
    console.log("dolphines won but didnt score 100");
}
else if (dolphineWin == false && KoalasAvg <= 100){
    console.log("Koalas won but didnt score 100");
}

// JSF2 Coding Challenge #4
const findAvg = (score) =>{
    let total = 0;
    for (var i = 0; i < score.length; i++){
        total += score[i];
    }
    return total / score.length;
}

const findWinner = (score1, score2) => {
    let winner = 0;
    if (score1 > score2){
        if (score2 * 2 < score1){
            winner = 1;
        } else{
            winner = 3;
        }
    } else {
        if (score1 * 2 < score2){
            winner = 2;
        } else{
            winner = 3;
        }
    }
    return winner;
}

dolAvg = findAvg(dolphinScore);
kolAvg = findAvg(KoalasScore);

winner = findWinner(dolAvg, KoalasAvg);

switch(winner){
    case(1):
        console.log(`dolphines win ${dolAvg} to ${kolAvg}`);
        break;
    case(2):
        console.log(`Koalas win ${kolAvg} to ${dolAvg}`);
        break;
    case(3):
        console.log(`nobody won`);
        break;
}

// JSF2 Coding Challenge #2
let bills = [125, 555, 44];
let totals = [];

function calcTip(bill){
    for (let i = 0; i < bill.length; i++){
        if (bill[i] >= 50 && bill[i] <= 300){
            totals.push(bill[i] * 0.15);
        } else {
            totals.push(bill[i] * 0.2);
        }
    }
}
calcTip(bills);
console.log(totals);

// JSF2 Coding Challenge #

let MarkObj = {
    name: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function(mass, height){
        mass = this.mass;
        height = this.height;

        return mass / Math.pow(height, 2);
    }
};

let JohnObj = {
    name: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function(mass, height){
        mass = this.mass;
        height = this.height;

        return mass / Math.pow(height, 2);
    }
};

markBMI = MarkObj.calcBMI();
johnBMI = JohnObj.calcBMI();

if (markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
