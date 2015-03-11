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
    if ($(window).width() < 335) {
        $(param).addClass('active_custom_mobile').removeClass('hvr-underline-reveal')
            .siblings().removeClass('active_custom_mobile').removeClass('hvr-underline-reveal');


    }
}


