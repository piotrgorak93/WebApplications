/**
 * Created by User_Piotr on 2015-02-27.
 */
$(document).ready(function () {
    $("#home").show();
    $("#first").hide();
    $("#second").hide();
    $("#third").hide();
});

$("#main").click(function () {
        $("#home").fadeIn();
        $("#first").hide();
        $("#second").hide();
        $("#third").hide();
        $("#mainLi").addClass('active_custom').removeClass('hvr-underline-reveal');
        $("#firstLi").removeClass('active_custom').addClass('hvr-underline-reveal');
        $("#secondLi").removeClass('active_custom').addClass('hvr-underline-reveal');
        $("#thirdLi").removeClass('active_custom').addClass('hvr-underline-reveal');
        autoCollapseAndChangeStyle();
    }
);
$("#firstLink").click(function () {
    $("#home").hide();
    $("#first").fadeIn();
    $("#second").hide();
    $("#third").hide();
    $("#mainLi").removeClass('active_custom').addClass('hvr-underline-reveal');
    $("#firstLi").addClass('active_custom').removeClass('hvr-underline-reveal');
    $("#secondLi").removeClass('active_custom').addClass('hvr-underline-reveal');
    $("#thirdLi").removeClass('active_custom').addClass('hvr-underline-reveal');
    autoCollapseAndChangeStyle();

});
$("#secondLink").click(function () {
    $("#home").hide();
    $("#first").hide();
    $("#second").fadeIn();
    $("#third").hide();
    $("#mainLi").removeClass('active_custom').addClass('hvr-underline-reveal');
    $("#firstLi").removeClass('active_custom').addClass('hvr-underline-reveal');
    $("#secondLi").addClass('active_custom').removeClass('hvr-underline-reveal');
    $("#thirdLi").removeClass('active_custom').addClass('hvr-underline-reveal');
    autoCollapseAndChangeStyle();

});
$("#thirdLink").click(function () {
    $("#home").hide();
    $("#first").hide();
    $("#second").hide();
    $("#third").fadeIn();
    $("#mainLi").removeClass('active_custom').addClass('hvr-underline-reveal');
    $("#firstLi").removeClass('active_custom').addClass('hvr-underline-reveal');
    $("#secondLi").removeClass('active_custom').addClass('hvr-underline-reveal');
    $("#thirdLi").addClass('active_custom').removeClass('hvr-underline-reveal');
    autoCollapseAndChangeStyle();

});

function autoCollapseAndChangeStyle() {
    if (!$("#button").hasClass("collapsed")) {
        $("#button").click();

    }
}


