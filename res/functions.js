/**
 * Created by User_Piotr on 2015-02-27.
 */
$(document).ready(function () {
        $("#home").show();
        $("#first").hide();
        $("#second").hide();
        $("#third").hide();
        mobile("#mainLi");
        showSlider(1, 25, 13, "#slider", "#outputText");


    }
);

$("#main").click(function () {
        $("#home").fadeIn();
        $("#first").hide();
        $("#second").hide();
        $("#third").hide();
        mobile("#mainLi");
        autoCollapseAndChangeStyle();
    }
);
$("#firstLink").click(function () {
    $("#home").hide();
    $("#first").fadeIn();
    $("#second").hide();
    $("#third").hide();
    mobile("#firstLi");
    autoCollapseAndChangeStyle();

});
$("#secondLink").click(function () {
    $("#home").hide();
    $("#first").hide();
    $("#second").fadeIn();
    $("#third").hide();
    mobile("#secondLi");
    autoCollapseAndChangeStyle();

});
$("#thirdLink").click(function () {
    $("#home").hide();
    $("#first").hide();
    $("#second").hide();
    $("#third").fadeIn();
    mobile("#thirdLi");
    autoCollapseAndChangeStyle();

});

/**
 * collapse menu in mobile mode after menu item is clicked
 */
function autoCollapseAndChangeStyle() {
    if (!$("#button").hasClass("collapsed")) {
        $("#button").click();
    }
}
/**
 *
 * @param param
 * function removes redundant classes from siblings of current li element
 */
function mobile(param) {
    $(param).addClass('active_custom').siblings().removeClass('active_custom');
    if ($(document).width() < 767) {
        $(param).removeClass('hvr-underline-reveal').siblings().removeClass('hvr-underline-reveal');
    }
}
/**
 * slider generator
 */
function showSlider(min, max, val, input, output) {
    $(function () {
        $(input).slider({
                min: min,
                max: max,
                value: val,
                slide: function (event, ui) {
                    $(output).val(ui.value);
                    if (max == 255) {
                        drawCanvas();
                    }
                }
            }
        ).draggable();
    });
}
/**
 * set password field visible
 */
function showPassword(password) {
    $("input").prev("p").show(200);
    $("input:hidden").show(200);
    $("#result").val(password);
}


function generatePassword() {

    var generatedPassword = [];
    var tab = generateTableToDraw();
    if (typeof tab === 'undefined') {
        return;
    }

    for (var i = 0; i < getNumberOfChars(); i++) {

        generatedPassword = generatedPassword.concat(tab[generateIndexOfSignFromTable(tab)]);

    }
    showPassword(generatedPassword.join(""));
}


function generateLowercase() {

    var tableLower = [];
    var j = 0;
    for (var i = 97; i <= 122; i++) {
        tableLower[j] = String.fromCharCode(i);
        j++;
    }
    return tableLower;
}
function generateUppercase() {

    var tableUpper = [];
    var j = 0;
    var i;
    for (i = 65; i <= 90; i++) {
        tableUpper[j] = String.fromCharCode(i);
        j++;
    }
    return tableUpper;
}
function generateSpecial() {

    var tableSpecial = [];
    var j = 0;
    var i;
    for (i = 33; i <= 47; i++) {
        tableSpecial[j] = String.fromCharCode(i);
        j++;
    }
    for (i = 58; i <= 64; i++) {
        tableSpecial[j] = String.fromCharCode(i);
        j++;
    }

    for (i = 91; i <= 96; i++) {
        tableSpecial[j] = String.fromCharCode(i);
        j++;
    }

    for (i = 123; i <= 126; i++) {
        tableSpecial[j] = String.fromCharCode(i);
        j++;
    }

    return tableSpecial;
}
function generateNumbers() {
    var tableNumbers = [];
    var i;
    for (i = 0; i <= 9; i++) {
        tableNumbers[i] = i.toString();
    }
    return tableNumbers;
}

function isUpperChecked() {
    return $("#uppercase").is(":checked");
}
function isLowerChecked() {
    return $("#lowercase").is(":checked");
}
function isSpecialChecked() {
    return $("#special").is(":checked");
}
function isNumberChecked() {
    return $("#numbers").is(":checked");
}

function generateTableToDraw() {
    var table = [];
    if (isUpperChecked()) {
        table = table.concat(generateUppercase());
    }
    if (isLowerChecked()) {
        table = table.concat(generateLowercase());
    }
    if (isSpecialChecked()) {
        table = table.concat(generateSpecial());
    }
    if (isNumberChecked()) {
        table = table.concat(generateNumbers());
    }
    if (!isUpperChecked() && !isLowerChecked() && !isSpecialChecked() && !isNumberChecked()) {
        alert("Zaznacz opcje");
        return;
    }
    return table;


}
function getNumberOfChars() {
    return $("#outputText").val();
}
function generateIndexOfSignFromTable(tab) {
    return Math.floor(Math.random() * tab.length);

}

