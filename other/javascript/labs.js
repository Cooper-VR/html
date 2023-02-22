// jshint esversion: 7


document.addEventListener("DOMContentLoaded", function() {
    /*
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

*/

//Data Structures, Modern Operators and Strings Coding Challenge #1

const game = {
    team1: 'Bayern Munich',
    team2: "Borrussia Dortmund",
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinex',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze'
        ],
    ],
    score: '4:0',
    scored:['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
    players1Final: ['Neuer',
    'Pavard',
    'Martinex',
    'Alaba',
    'Davies',
    'Kimmish',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    'Thiago', 
    'Coutinho',
    'Perisic'
    ]
};

let team1 = game.odds.team1;
let draw = game.odds.draw;
let team2 = game.odds.team2;

function printGoals(...players){
    for (let i = 0; i < players.length; i++){
        console.log(players[i]);
    }
    let team1Score = 0;
    let team2Score = 0;

    for (let i = 0; i < players.length; i++) {
        if (game.players[0].includes(players[i])){
            team1Score++;
        } else if (game.players[1].includes(players[i])){
            team2Score++;
        } 
    }

    console.log(`${game.team1} scored ${team1Score}`);
    console.log(`${game.team2} scored ${team2Score}`);
    
    team1Better = game.odds.team1 < game.odds.team2;

    switch(team1Better){
        case(true):
            console.log("team 1 is more likley to win");
            break;
        case(false):
            console.log("team 2 is more likley to win");
    }
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(game.scored[0], game.scored[1], game.scored[2], game.scored[3]);

//Data Structures, Modern Operators and Strings Coding Challenge #2

for (let i = 0; i < game.scored.length; i++) {
    console.log(`Goal ${i + 1}: ${game.scored[i]}`);

    
}
console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw : ${game.odds.x}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

let scorers = {
};

for (let i = 0; i < game.scored.length; i++) {
    let scored = game.scored[i];
    if (scorers[scored] == null){
        scorers[scored] = 1;
    } else {
        scorers[scored] += 1;
    }
}

console.log(scorers);


//Data Structures, Modern Operators and Strings Coding Challenge #3

const gameEvents = new Map([ 
    [17, ' GOAL'],
    [36, ' Substitution'],
    [47, ' GOAL'],
    [61, 'Substitution'],
    [64, ' Yellow card'],
    [69, ' Red card'], 
    [70, 'Substitution'],
    [72, ' Substitution'],
    [76, ' GOAL'],
    [80, ' GOAL'],
    [92, ' YELLOW CARD'] 
]);

console.log(gameEvents);

gameEvents.delete(64);

console.log(gameEvents);
const times = Array.from(gameEvents.keys());
console.log(times.length);

let timeBetween = [];
let total = 0;

for (let i = 0; i <= times.length; i++){
    timeBetween.push(times[i+1] - times[i]);

    if (isNaN(timeBetween[i]) == false){
        total += timeBetween[i];
    }
    
}
console.log(`An event happened, on average, every ${total / times.length - 1} minutes`);


for (let i = 0; i < Array.from(gameEvents.keys()).length; i++) {
    console.log(Array.from(gameEvents.values)[i]);
    if (Array.from(gameEvents.keys())[i] < 45){
        console.log(`[FIRST HALF] ${Array.from(gameEvents.keys())[i]}: ${Array.from(gameEvents.values())[i]}`);
    } else{
        console.log(`[SECOND HALF] ${Array.from(gameEvents.keys())[i]}: ${Array.from(gameEvents.values())[i]}`);
    }
}

//Data Structures, Modern Operators and Strings Coding Challenge #4



let textElement = document.createElement('textarea');
textElement.setAttribute('id', 'textElement');

let newButton = document.createElement('button');
newButton.setAttribute('id', 'newButton');
newButton.setAttribute('onclick', 'newButtonClick()');
newButton.textContent = "submit";

document.body.append(textElement);
document.body.append(newButton);
//check below for function

/*
//Arrays Coding Challenge #1
function checkDogs(dogsJulia, dogsKate){
    let newJulia = dogsJulia;
    newJulia.pop();
    newJulia.pop();

    newJulia.shift();

    let both = newJulia.concat(dogsKate);
    console.log(both);
    for (let i = 0; i < both.length; i++){
        if (both[i] <= 2){
            console.log(`Dog number ${i} is still a puppy, and is ${both[i]} years old`);
        } else {
            console.log(`Dog number ${i} is an adult, and is ${both[i]} years old`);
        }
    };
}

dogs = [3, 5, 2, 12, 7];
dogs2 = [4, 1, 15, 8, 3];
checkDogs(dogs, dogs2);

*/
//Arrays Coding Challenge #2

let calcAverageHumanAge  = (ages) => {
    let total = ages.filter(age => age <= 2)
                    .map(age => age * 2)
                    .concat(ages.filter(age => age > 2)
                                .map(age => 16 + age * 4))
                    .filter(age => age < 18)
                    .reduce((acc, age) => acc + age, 0);

    console.log(total);
};
data = [5, 2, 4, 1, 15, 8, 3];
calcAverageHumanAge(data);

//Arrays Coding Challenge #4

const dogs = [{
    weight: 22,
    curFood: 250,
    owners: ['Alice', 'Bob']
    },{
    weight: 8,
    curFood: 200,
    owners: ['Matilda']
    },{
    weight: 13,
    curFood: 275,
    owners: ['Sarah', 'John']
    },{
    weight: 32,
    curFood: 340,
    owners: ['Michael']
    }
];
let okay = []
let eatingAmounts = [];
let recommendedFood = 0;
for (let i = 0; i < dogs.length; i++) {
    recommendedFood = dogs[i].weight ** 0.75 * 28;
    dogs[i].recommended = recommendedFood;

    if (dogs[i].recommended/dogs[i].curFood > 10){
        eatingAmounts.push('ownersEatTooMuch');
        console.log('okay: false');
    } else if (dogs[i].recommended/dogs[i].curFood < -10){
        eatingAmounts.push('ownersEatTooLittle');
        console.log('okay: false');
    } else{
        if (dogs[i].curFood == recommendedFood){
            console.log("exacally right: true")
        } else {
            console.log("exacally right: false")
        }
        eatingAmounts.push('good');
        console.log('okay: true');
        okay.push(dogs[i]);
    }

    if (dogs[i].owners.includes("Sarah") && eatingAmounts[i] && eatingAmounts[i] != 'good'){
        console.log("sarah need to feed her dog better");
    }
}

let toMuch = [];
let toLittle = [];
let good = [];

for (let index = 0; index < eatingAmounts.length; index++) {
    if (eatingAmounts[index] == 'ownersEatTooMuch'){
        toMuch.push(index);
    } else if (eatingAmounts[index] == 'ownersEatTooLittle'){
        toLittle.push(index);
    } else{
        good.push(index);
    }
}

shadowDogs = dogs;
console.log(shadowDogs);
shadowDogs.sort((a, b) => {
    if (a.recommended < b.recommended){
        return -1;
    } else if (a.recommended > b.recommended){
        return 1;
    } else{
        return 0;
    }
});



let muchNames = [];
let littleNames = [];
let goodNames = [];

for (let i = 0; i < toMuch.length; i++) {
    muchNames.push(dogs[toMuch[i]].owners);
}
for (let i = 0; i < toLittle.length; i++) {
    littleNames.push(dogs[toLittle[i]].owners);
}
for (let i = 0; i < good.length; i++) {
    goodNames.push(dogs[good[i]].owners);
}

console.log(`${muchNames} eat to much`);
console.log(`${littleNames} eat to much`);
console.log(`${goodNames} eat to much`);

});


function newButtonClick(){
    let resultString = document.createElement('p');
    resultString.setAttribute('id', 'showResult');

    const check = document.querySelector('#showResult');

    if (check != null){
        check.remove();
    }

    let text = document.querySelector('#textElement').value;
    let textArray = text.split(', ');
    let endString = '';
    newStringArray = [];
    for (let i = 0; i < textArray.length; i++){
        let string = textArray[i];
        const stringArray = string.split("_");

        endString = '';
        for (let index = 1; index < stringArray.length; index++) {
            console.log(stringArray[index]);
            endString += stringArray[index].charAt(0).toUpperCase() + stringArray[index].slice(1);
        }

        const newString = stringArray[0] + endString;
        endString = '';
        console.log(`new string ${newString}`);
        newStringArray.push(newString);
    }
    resultString.textContent = newStringArray;
    document.body.append(resultString);
}