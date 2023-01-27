var date = new Date();

var time = 0;
var time2 = 0;


time = Date.now()
console.log(time);
for (var i = 0; i < 101; i++)
{
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
time2 = Date.now()

console.log(time);
console.log(time2 - time);
