var colors = ["#68a2ff","#639fff","#5f9cfc","#5b9bff","#4f92f9","#4f92ff","#448bff","#2174ff","#146cff","#005fff"];
var div = document.getElementById("div");

div.addEventListener("click",switchRadius);
/*
var counter = 0;
function changeColor() {
    div.style.backgroundColor = colors[counter];
    if (counter >= colors.length) {
        counter = 0;
    }
    else {
        counter++;
    }
}*/
var t = setInterval(changeColor,50);
var counterr = 0;
var counterg = 0;
var counterb = 0;
function changeColor() {
    div.style.backgroundColor = "rgb("+counterr+","+counterg+","+counterb+")";
    if (counterr >= 255) {
        counterg += 5;
    }
    else {
        counterr += 5;
    }
    if (counterg >= 255) {
        counterb += 5;
    }
    if (counterb >= 255) {
        counterr = 0;
        counterg = 0;
        counterb = 0;
    }
}
function switchRadius() {
    var radius = div.style.borderRadius;
    if (radius == "50%") {
        div.style.borderRadius = "0";
    }
    else {
        div.style.borderRadius = "50%";
    }
}