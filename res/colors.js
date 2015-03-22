/**
 * Created by User_Piotr on 2015-03-18.
 */
$(document).ready(function () {
        paintApplication();


    }
);

function drawCanvas() {
    var width = $(document).width();
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if (width < 767) {
        ctx.canvas.width = width - 30;
    }
    else {
        ctx.canvas.width = 200;
    }
    ctx.fillStyle = "#" + getAndParseToHex();
    ctx.fillRect(0, 0, ctx.canvas.width, 100);
    writeColor();
}

function getAndParseToHex() {
    var str = $("#outputRed").val();
    str = Number(str).toString(16);
    str = addZeroToColor(str);
    var str2 = $("#outputGreen").val();
    str2 = Number(str2).toString(16);
    str2 = addZeroToColor(str2);
    var str3 = $("#outputBlue").val();
    str3 = Number(str3).toString(16);
    str3 = addZeroToColor(str3);
    console.log(str + str2 + str3);
    return str + str2 + str3;

}

function writeColor() {
    $("#pickedColor").text("Wybrany kolor to #" + getAndParseToHex());
}
function addZeroToColor(str) {
    if (str.length === 1) {
        str = "0" + str;
    }
    return str;
}
function drawSliders() {
    showSlider(0, 255, 127, "#sliderRed", "#outputRed");
    showSlider(0, 255, 127, "#sliderGreen", "#outputGreen");
    showSlider(0, 255, 127, "#sliderBlue", "#outputBlue");
}
function paintApplication() {

    drawSliders();
    resetOutputs();
    drawCanvas();
}
function resetOutputs(){
    $("#outputRed").val(127);
    $("#outputGreen").val(127);
    $("#outputBlue").val(127);
}
function resetButton(){
    $("#resetButton").removeClass("btn-default").removeClass("btn");
    $("#resetButton").addClass("btn-default").addClass("btn");
}