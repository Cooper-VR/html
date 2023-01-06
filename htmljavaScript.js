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