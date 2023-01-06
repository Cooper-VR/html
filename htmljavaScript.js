function OnClick(number){
    let num = document.getElementById("inputField").value;
    let result = 0;

    result = num * num

    console.log(result);
    console.log(number);
    console.log(num);

    document.getElementById("demo").innerHTML = result;
}

function checkPassword(){
    let userName=document.getElementsByClassName("userName").value;
    let password=document.getElementsByClassName("password").value;

    if (userName=="CooperVR"){
        document.getElementsByClassName("result").innerHTML = "true";
    }
    else{
        document.getElementsByClassName("result").innerHTML = "false";
    }

}