/**
 * Created by User_Piotr on 2015-02-27.
 */
$(document).ready(function () {
    $("#home").show();
    $("#first").hide();
    $("#second").hide();
    $("#third").hide();
})
$("#main").click(function () {
    $("#home").fadeIn();
    $("#first").hide();
    $("#second").hide();
    $("#third").hide();
    $("#mainLi").addClass('active');
    $("#firstLi").removeClass('active');
    $("#secondLi").removeClass('active');
    $("#thirdLi").removeClass('active');
    }
);
$("#firstLink").click(function () {
    $("#home").hide();
    $("#first").fadeIn();
    $("#second").hide();
    $("#third").hide();
    $("#mainLi").removeClass('active');
    $("#firstLi").addClass('active');
    $("#secondLi").removeClass('active');
    $("#thirdLi").removeClass('active');

});
$("#secondLink").click(function () {
    $("#home").hide();
    $("#first").hide();
    $("#second").fadeIn();
    $("#third").hide();
    $("#mainLi").removeClass('active');
    $("#firstLi").removeClass('active');
    $("#secondLi").addClass('active');
    $("#thirdLi").removeClass('active');


});
$("#thirdLink").click(function () {
    $("#home").hide();
    $("#first").hide();
    $("#second").hide();
    $("#third").fadeIn();
    $("#mainLi").removeClass('active');
    $("#firstLi").removeClass('active');
    $("#secondLi").removeClass('active');
    $("#thirdLi").addClass('active');


});