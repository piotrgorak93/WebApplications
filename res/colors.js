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
        ctx.canvas.width = $(document).width() - 30;
        console.log(ctx.canvas.width);

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
    for (var i = 1; i <= 4; i++)
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
        for (var index = 1; index <= 4; index++) {
            paintOnePart(index);
        }
    }
    else {
        paintOnePart(param);
        switch (param) {
            case 1:
                resetBody();
                break;
            case 2:
                resetNav();
                break;
            case 3:
                resetJumbotron();
                break;
            case 4:
                resetLinks();
                break;
        }
    }

}
function resetOutputs(i) {
    $("#outputRed" + i).val(127);
    $("#outputGreen" + i).val(127);
    $("#outputBlue" + i).val(127);
}

function paintElement(element) {
    var arrayOfElements = ["body", "nav", "#jumbotron", "font"]
    if (element == 3) {
        $("body").css("color", "#" + getAndParseToHex(element + 1));
        $("a").css("color", "#" + getAndParseToHex(element + 1));
    }
    else $(arrayOfElements[element]).css("background-color", "#" + getAndParseToHex(element + 1));


}
function getInputs() {
    return ["#sliderRed", "#sliderGreen", "#sliderBlue"];

}
function getOutputs() {
    return ["#outputRed", "#outputGreen", "#outputBlue"];
}
function paintOnePart(index) {
    for (var i = 0; i < 4; i++) {
        showSlider(0, 255, 127, getInputs()[i] + index.toString(), getOutputs()[i] + index.toString());
    }
    resetOutputs(index);
    drawCanvas("myCanvas" + index.toString(), index);

}
function resetPage() {
    resetBody();
    resetNav();
    resetLinks();
    resetJumbotron();
    for (var i = 1; i <= 4; i++) {
        paintApplication(i);
    }
}
function resetBody() {
    $("body").css({"background-color": "#fff", "color": "#333"});

}
function resetNav() {
    $("nav").css("background-color", "#f8f8f8");

}
function resetLinks() {
    $("a").css("color", "#333");

}
function resetJumbotron() {
    $("#jumbotron").css("background-color", "#eee");

}
