console.log("hello world");

//uses semi-collen format (not required)
//use console.log to print 

/* 
multi line commend
*/

//varibles
//can do just, var a;

//method 1 (var), whole

var Name = "";

var number = 0;
var nameLength = 0;
//like python

// console.log() = print() python
// prompt() = input() python

//method 2 (let), only in scope
let myName = "my name";

//method 3 (const), cant be changed
const pi = 3.14;

//if-statement (c# exacally, considitons can use zen python style):
//also "===" checks if value is same (3 === "3") -> false, (3 == "3") -> true (also has !==)

// and is done with &&(like c#), or is done with || (like c#)

//else (like python)
//else if is done is done with "else if" (like c#)
if (pi == 3.14) {
    console.log(myName); 
}

//switch statements:
//without break it runs code in next case
/* format

switch (val){ (do "switch", followed by the variable to check)
    case 1: -> (else if val == 1)
        console.log(val);
        break <used to break the switch statement>
    case 2: -> (else if val == 1)
        console.log(val);
        break <used to break the switch statement>
    default: (like an else statement)
        console.log("else");
        break;
}
*/

//imcrement
number++; //increment +1 like c#
//decrement
number--; //decrement -1 like c#

//remainder is like python (%)

// a = a + 12
// ^ like python, a += 12

/* escape characters

double quote, \", or single quotes (like python)
single quote use ' to use both

just use phthon rules
slash -> \\
newline -> \n
carriage -> \r
tab -> \t
backspace -> \b
form feed -> \f

*/


//length of string (like atribute of python class)
nameLength = Name.length;
console.log(Name[Name.length -1]);

//use bracket notation to get charcter of string(like python)
//LAST CHARACTER use .length - 1 to get last charcter, [-1] doesn't work (use .length - 2 to get second to last)

//functions:
/*
format:
function <name>(agr1, agr2){
    <code block>;

    return var; (to return variable)
}

scope:

global:
variables are global by defalut
not having the "var" keyword makes it global

local:
if vaiable is declared in functions then its local

can have both local and global variables with same name(local comes first tho)
*/

//arrays (different data types), can be nested like pythonlist (includes notation)
var myArray = ["string", 5.6, ["string2", "string3"]];
console.log(myArray[2][0]);

//appending to array(array.push(<data to append>) appends to the end), (array.unshift(<data to add>), appends to front of array) ):
myArray.push(["appended", "appended2"]);
console.log(myArray[3]);

//removing element (array.pop(), removes las element), (array.shift(), removes first element)

//booleans (true and false like c#)

//for loop, exact same as c#
for (var i = 0; i < 5; i++){
    console.log(i);
}

//while loop, same as python and c#

for (var i; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("full word");
    }else if (i % 3 == 0){
        console.log("full");
    }else if (i % 5 == 0){
        console.log("word");
    }else{
        console.log(i);
    }

    
}