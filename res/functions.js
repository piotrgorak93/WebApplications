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
        $("#mainLi").addClass('active_custom');
        $("#firstLi").removeClass('active_custom');
        $("#secondLi").removeClass('active_custom');
        $("#thirdLi").removeClass('active_custom');
        autoCollapseAndChangeStyle();
    }
);
$("#firstLink").click(function () {
    $("#home").hide();
    $("#first").fadeIn();
    $("#second").hide();
    $("#third").hide();
    $("#mainLi").removeClass('active_custom');
    $("#firstLi").addClass('active_custom');
    $("#secondLi").removeClass('active_custom');
    $("#thirdLi").removeClass('active_custom');
    autoCollapseAndChangeStyle();

});
$("#secondLink").click(function () {
    $("#home").hide();
    $("#first").hide();
    $("#second").fadeIn();
    $("#third").hide();
    $("#mainLi").removeClass('active_custom');
    $("#firstLi").removeClass('active_custom');
    $("#secondLi").addClass('active_custom');
    $("#thirdLi").removeClass('active_custom');
    autoCollapseAndChangeStyle();

});
$("#thirdLink").click(function () {
    $("#home").hide();
    $("#first").hide();
    $("#second").hide();
    $("#third").fadeIn();
    $("#mainLi").removeClass('active_custom');
    $("#firstLi").removeClass('active_custom');
    $("#secondLi").removeClass('active_custom');
    $("#thirdLi").addClass('active_custom');
    autoCollapseAndChangeStyle();

});

function autoCollapseAndChangeStyle() {
    if (!$("#button").hasClass("collapsed")) {
        $("#button").click();

    }
}


