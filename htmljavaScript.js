function OnClick(){
    let num = document.getElementById("inputField").value;
    let result = 0;

    result = num * num;

    document.getElementById("demo").innerHTML = result;
}

let number = 0;
function nightMode(){ 

    let night = document.querySelector("button");
    if (number % 2 == 1){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.body.style.borderColor = "white";

        night.style.backgroundColor="white";
        night.style.borderColor = "white";
    }
    if (number % 2 == 0){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.body.style.borderColor = "black";

        night.style.backgroundColor="black";
        night.style.borderColor = "black";
    }
    number += 1;
}
let expresion = "";

function addNumber(AddString){
    let paragraph = document.getElementsByClassName("inputField")[0];
    paragraph.innerHTML = expresion;
    
    if (AddString.name == "="){
    var result = eval(expresion);
        console.log(result);
        paragraph.innerHTML = result;
        expresion = "";
        return result;
    }
    if (AddString.name == "del"){
        expresion = "";
        paragraph.innerHTML = expresion + result;
    }
    else{
        expresion += AddString.name;
        console.log(expresion);
    }
    paragraph.innerHTML = expresion;
}