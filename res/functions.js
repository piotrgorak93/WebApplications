/**
 * Created by User_Piotr on 2015-02-27.
 */
$(document).ready(function () {
        $("#home").show();
        $("#first").hide();
        $("#second").hide();
        $("#third").hide();
        mobile("#mainLi");
        showSlider();


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
    if ($(document).width() >= 768) {
        $(param).addClass('active_custom').removeClass('hvr-underline-reveal').siblings().addClass('hvr-underline-reveal').removeClass('active_custom');
    } else {
        $(param).addClass('active_custom_mobile').removeClass('hvr-underline-reveal')
            .siblings().removeClass('active_custom_mobile').siblings().removeClass('hvr-underline-reveal');


    }
}
function showSlider() {
    $(function () {
        $("#slider").slider({
                min: 1,
                max: 25,
                value: 13,
                slide: function (event, ui) {
                    $("#outputText").val(ui.value);
                }
            }
        );
    });
}

function showPassword() {
    $("input").prev("p").show(200);
    $("input:hidden").show(200);
}
function generatePassword() {


    showPassword();
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
    for (i = 64; i <= 90; i++) {
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
function generateNumbers(){
    var tableNumbers = [];
    var i;
    for (i=0;i<=9;i++){
        tableNumbers[i]=i;
    }
    return tableNumbers;
}

