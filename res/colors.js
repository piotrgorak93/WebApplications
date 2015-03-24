/**
 * Created by User_Piotr on 2015-03-18.
 */
$(document).ready(function () {
        paintApplication();
    }
);

function drawCanvas(canvas, idNumber) {
    var width = $(document).width();
    var ctx = document.getElementById(canvas).getContext("2d");
    if (width < 767) {
        ctx.canvas.width = width - 30;
    }
    else {
        ctx.canvas.width = 200;
    }
    ctx.fillStyle = "#" + getAndParseToHex(idNumber);
    ctx.fillRect(0, 0, ctx.canvas.width, 100);
    writeColor();
}

function getAndParseToHex(i) {
    var str = $("#outputRed" + i).val();
    str = Number(str).toString(16);
    str = addZeroToColor(str);
    var str2 = $("#outputGreen" + i).val();
    str2 = Number(str2).toString(16);
    str2 = addZeroToColor(str2);
    var str3 = $("#outputBlue" + i).val();
    str3 = Number(str3).toString(16);
    str3 = addZeroToColor(str3);
    return str + str2 + str3;

}

function writeColor() {
    for (var i = 1; i <= 3; i++)
        $("#pickedColor" + i).text("Wybrany kolor to #" + getAndParseToHex(i));

}
function addZeroToColor(str) {
    if (str.length === 1) {
        str = "0" + str;
    }
    return str;
}


function paintApplication(param) {
    if (param === undefined) {
        for (var index = 1; index <= 3; index++) {
            paintOnePart(index);
        }
    }
    else {
        paintOnePart(param);
    }

}
function resetOutputs(i) {
    $("#outputRed" + i).val(127);
    $("#outputGreen" + i).val(127);
    $("#outputBlue" + i).val(127);
}

function paintBackground(color) {
    if (color === undefined) {
        $("body").css("background-color", "#" + getAndParseToHex());
    } else $("body").css("background-color", color);

}
function getInputs() {
    return ["#sliderRed", "#sliderGreen", "#sliderBlue"];

}
function getOutputs() {
    return ["#outputRed", "#outputGreen", "#outputBlue"];
}
function paintOnePart(index) {
    for (var i = 0; i < 3; i++) {
        showSlider(0, 255, 127, getInputs()[i] + index.toString(), getOutputs()[i] + index.toString());
    }
    resetOutputs(index);
    drawCanvas("myCanvas" + index.toString(), index);

}
