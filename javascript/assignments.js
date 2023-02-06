/*
Cooper Bower P.M.
*/

// JSF1 Assignment Data Types

let country = "Japan";
let continent = "Asia";
let population = 125;
let country2 = country;

alert(country2);

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


a = parseInt(prompt("First number?"));
b = parseInt(prompt("Second number?"));
let sum = a + b;
alert(sum); // 3

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

let numNeighbours = prompt('How many neighbor countries does your country have?');

if (parseInt(numNeighbours) === 1){ //if using "===" needs to be same data type
    console.log("only 1 border");
}
else if (numNeighbours > 1){
    console.log("more than one border");
}
else{
    console.log("no borders");
}

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

//