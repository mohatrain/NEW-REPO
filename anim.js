function myMove(){
let id = null;
const elem = document.getElementById("animate");
let pos = 0;
clearInterval(id);
id = setInterval(frame,5);
function frame(){
    if(pos == 350){
        clearInterval(id);
    }else{
        pos++;
        elem.style.top = pos + "px";
        elem.style.left = pos + "px";
    }
}
}

// var myArr = ["Marvin","Jona","Kamu","Nsubuga"];
// var str = "Marvin Kamu";
// function toUpperCase(str){
//     console.log("MARVIN KAMU");
// }
// toUpperCase()
// console.log(str.toUpperCase());

var age = 25;
switch (age) {
  case 18:
console.log("YOU OLD ENOUGH TO VOTE😊😊😊😊");
    break;
  case 25:
    console.log("No please you cant votee");
    break;
}
