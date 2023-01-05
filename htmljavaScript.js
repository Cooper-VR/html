function OnClick(number){
    let num = document.getElementById("inputField").value;
    let result = 0;

    result = num * 10

    console.log(result);
    console.log(number);
    console.log(num);

    document.getElementById("demo").innerHTML = result;
}

function getRoot(){
    return "../html/firstHTML.html"
}