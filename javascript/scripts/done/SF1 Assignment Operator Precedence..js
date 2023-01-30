/*
Cooper Bower P.M.
*/

// JSF1 Assignment Operator Precedence

let country = "Japan";
let continent = "Asia";
const population = 125.7;
let country2 = country;
let isIsland = true;
var language = "japanese";

let half = population / 2;

/*
if (population > 36){
    console.log("population is greater than the average 36 mill")
}
else if (population > 36){
    console.log("population is less than the average");
}
else{
    console.log("population is less than sweeden");
}
*/
let description = country + " is in " + continent + ", and its 120 million people speak " + language;


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


let a = parseInt(prompt("First number?"));
let b = parseInt(prompt("Second number?"));
let sum = a + b
alert(sum); // 12