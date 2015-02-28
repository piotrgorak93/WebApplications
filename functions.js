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
    }
);
$("#firstLink").click(function () {
    $("#home").hide();
    $("#first").fadeIn();
    $("#second").hide();
    $("#third").hide();

});
$("#secondLink").click(function () {
    $("#home").hide();
    $("#first").hide();
    $("#second").fadeIn();
    $("#third").hide();

});
$("#thirdLink").click(function () {
    $("#home").hide();
    $("#first").hide();
    $("#second").hide();
    $("#third").fadeIn();

});