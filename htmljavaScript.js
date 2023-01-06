function OnClick(number){
    let num = document.getElementById("inputField").value;
    let result = 0;

    result = num * num

    console.log(result);
    console.log(number);
    console.log(num);

    document.getElementById("demo").innerHTML = result;
}

let number = 0

function nightMode(){
    global 

    if (number % 2 == 0){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.body.style.border = "white";
    }
    if (number % 2 == 1){
        ocument.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.body.style.border = "black";
    }

    number += 1;
}