/*
Cooper Bower P.M.
*/

// jshint esversion: 6

// JSF1 Assignment Data Types

let country = "Japan";
let continent = "Asia";
let population = 125;
let country2 = country;

//alert(country2);

let isIsland = true;
//var language;

console.log(country);
//console.log(language);
console.log(population);
console.log(isIsland);

// JSF1 Assignment Data Types
console.log(typeof country); //string
//console.log(typeof language); //string
console.log(typeof population); //int
console.log(typeof isIsland); //boolean

// JSF1 Assignment let, const, var

language = "Japanese";
console.log(language);

//JSF1 Assignment Basic Operators.

let half = population / 2;

console.log(half);
console.log(population + 1);

if (population > 36){
    console.log("population is greater than the average 36 mill")
}
else if (population > 36){
    console.log("population is less than the average");
}
else{
    console.log("population is less than sweeden");
}

let description = country + " is in " + continent + ", and its 120 million people speak " + language;
console.log(description);

// JSF1 Assignment Operator Precedence
let a = 1, b = 1;
let c = ++a; //2
let d = b++; //1

a = 2;
let x = 2 + (a *= 2); //6

console.log("" + 1 + 0); //10
console.log("" - 1 + 0); //-1
console.log(true + false); //1
console.log(6 / "3"); //2
console.log("2" * "3"); //6
console.log(4 + 5 + "px"); //9px
console.log("$" + 4 + 5); //$45
console.log("4" - 2); //2
console.log("4px" - 2); //NaN
console.log("  -9  " + 5); //-4 (   -9   5)
console.log("  -9  " - 5);//    -9   -4 (-14)
console.log(null + 1); //1
console.log(undefined + 1); // undef
console.log(" \t \n" - 2); //   -2 (just -2)


//a = parseInt(prompt("First number?"));
//b = parseInt(prompt("Second number?"));
let sum = a + b;
//alert(sum); // 3

// JSF1 Assignment String and Template Literals
description = `${country} is in ${continent} and 120 mill people speak ${language}`;

console.log(description);

// JSF1 Assignment if-else Statements
let above33;


if (population > 33){
    above33 = `${country}s population is above average`;
    console.log(above33);
}
else{
    above33 = `${country}s population is below average`;
    console.log(above33);
}

// JSF1 Assignment Type Conversion and Coercion

console.log('9' - '5'); //4
console.log('19' - '13' + '17'); //617
console.log('19' - '13' + 17); //23
console.log('123' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143

//JSF1 Assignment Truthy Falsey
//none

//JSF1 Assignment  Equality Operators.

//let numNeighbours = prompt('How many neighbor countries does your country have?');

//if (parseInt(numNeighbours) === 1){ //if using "===" needs to be same data type
    //console.log("only 1 border");
//}
//else if (numNeighbours > 1){
    //console.log("more than one border");
//}
//else{
    //console.log("no borders");
//}

// JSF1 Assignment Logical Operator

if (language == "English" && population < 50 && numNeighbours > 0){
    console.log(`${country} would fit that`);
}
else{
    console.log(`${country} does not fit the requirements`);
}

// JSF1 Assignment The Switch Statement

switch(language){
    case("Chinese" || "Mandarin"):
        console.log("MOST number of native speakers!");
        break;
    case("Spanish"):
        console.log("2nd place in number of native speakers");
        break;
    case("English"):
        console.log("third place");
        break;
    case("Hindi"):
        console.log("Number 4");
        break;
    case("Arabic"):
        console.log("5th most natively spoken language");
        break;
    default:
        console.log("Great language too :D");
        break;
}

// JSF2 Assignment Function
function describeCountry (country, population, capitalCity){
    const finalString = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return finalString;
}

//const description1 = describeCountry(prompt("whats the country"), prompt("what is the population"), prompt("what is the capital"));
//const description2 = describeCountry(prompt("whats the country"), prompt("what is the population"), prompt("what is the capital"));
//const description3 = describeCountry(prompt("whats the country"), prompt("what is the population"), prompt("what is the capital"));

//console.log(description1);
//console.log(description2);
//console.log(description3);

// JSF2 Assignment Function Declarations vs. Expressions
function populationPercent (population){
    const total = 7900;
    const percent = (population / total) * 100;
    return percent;
}

//const pop1 = populationPercent(prompt("whats the popluation"));
//const pop2 = populationPercent(prompt("whats the popluation"));
//const pop3 = populationPercent(prompt("whats the popluation"));

//console.log(pop1);
//console.log(pop2);
//console.log(pop3);

// JSF2 Assignment Function Declarations vs. Expressions

const populationPercent2 = (population) => (population / 7900) * 100;
//const population1 = prompt("whats the population");
//const population2 = prompt("whats the population");
//const population3 = prompt("whats the population");

//console.log(populationPercent2(population1));
//console.log(populationPercent2(population2));
//console.log(populationPercent2(population3));

const sum2 = (num1, num2) => num1 + num2;
const stringLength2 = (str) => console.log(`the length of "${str}" is:`, str.length);
const stringLength3 = (str) => {
    let length = str.length;
    console.log(`the length of "${str}" is:`, length);
    return str.length;
};
const showAlert = (name) => {    
    //alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`);
};

// JSF2 Assignment Functions Calling Other Functions
const describePopulation = (country, population) => {
    const formatedString = `${country} has ${population} million people, which is about ${populationPercent(population)}% of the world.`;
    return formatedString;
};

//console.log(describePopulation(prompt("another set country") ,prompt("another set for population")));
//console.log(describePopulation(prompt("another set country") ,prompt("another set for population")));
//console.log(describePopulation(prompt("another set country") ,prompt("another set for population")));

// JSF2 Assignment Introduction to Arrays

populations = [59, 330, 68, 1411];

console.log(populations.length == 4);

let percentages = [];

for (let i = 0; i < 4; i++){
    let percent = populationPercent2(populations[i]);
    percentages.push(percent);
    console.log(percentages[i]);
}

// JSF2 Basic Array Operations (Methods)

let neighbours = ["canada", "Mexico", "cuba"];
neighbours.push("utopia");
console.log(neighbours[3]);
neighbours.pop();
console.log(neighbours);

if (neighbours.includes("Germany")){
    console.log("");
} else {
    console.log("Probably not a central European country :D");
}

neighbours[0] = "nice people country";
console.log(neighbours);

// JSF2 Introduction to Objects

let myCountry = {
    country: ["Finland"],
    capital: ["Helsinki"],
    language: ["finnish"],
    population: [6],
    neighbours: [3],
    wholeCountry: "",
    isIsland: false,
    describe: function(wholeString){
        console.log(this.wholeCountry);
    }
};

// JSF2 Dot vs Bracket Notation

myCountry.population[0] = myCountry.population[0] + 2;
myCountry["population"][0] = myCountry["population"][0] - 2;


let wholeCountry = "";
wholeCountry = `${myCountry.country[0]} has ${myCountry.population[0]} million ${myCountry.language[0]}-speaking people, ${myCountry.neighbours[0]} neighboring countries and a capital called ${myCountry.capital[0]}.`

myCountry.wholeCountry = wholeCountry;


// JSF2 Object Methods

myCountry.describe(wholeCountry);

if (myCountry.neighbours < 1){
    myCountry.isIsland = true;
} else{
    myCountry.isIsland = false;
}

// JSF2 The for Loop

for (let i = 1; i <= 50; i++){
    console.log(`Voter number ${i} is currently voting`);
}

//JSF2 Looping Arrays, Break and Continue

let percentages2 = [];

for (let i = 0; i < 4; i++){
    let percent = populationPercent2(populations[i]);
    percentages2.push(percent);
    console.log(percentages2[i]);
}

//JSF2 Looping Backwards and Loops in Loops

let listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++){
    
    for (let x = 0; x < listOfNeighbours[i].length; x++){
        if (listOfNeighbours[i].length < 2){
            console.log("no neighbours");
        } else{
           current = listOfNeighbours[i][x];
           for (let y = 0; y < listOfNeighbours[i].length; y ++){
            if (current != listOfNeighbours[i][y])
            console.log(`${current} is neighbours with ${listOfNeighbours[i][y]}`);
           }
        }
    }

}