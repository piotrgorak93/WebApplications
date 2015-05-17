// Get context with jQuery - using jQuery's .get() method.
var ctx = $("#myChart").get(0).getContext("2d");
//size of the canvas
ctx.canvas.width = 120 * getDays().length;
ctx.canvas.height = window.innerHeight / 2;
getMax();
getMin();
getMean();
setHorizontalScroll();

function getGoldPrice() {
    var array = [];
    $(".downloadedData").each(function () {
        array.push($(this).text());

    });
    return array

}
function getDays() {
    var array = [];
    $(".downloadedDate").each(function () {
        array.push($(this).text());

    });
    return array
}


var data = {
    labels: getDays(),
    datasets: [
        {
            label: "Wykres cen złota",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(255,0,0,1)",
            pointColor: "rgba(220,255,220,1)",
            pointStrokeColor: "#f00",
            pointHighlightFill: "#f00",
            pointHighlightStroke: "rgba(255,0,0,1)",

            data: getGoldPrice()
        }
    ]
};
var options = {
    bezierCurve: false
};
function getMax() {
    $("#max").text(getGoldPrice().sort().reverse()[0]);
}
function getMin() {
    $("#min").text(getGoldPrice().sort()[0]);
}
function getMean() {
    var tempTable= getGoldPrice().map(Number);
    var total = 0;
    for (var i = 0; i < tempTable.length; i++) {
        total += tempTable[i] << 0;
    }
    $("#mean").text((total/getGoldPrice().length).toFixed(2));
}
function setHorizontalScroll(){
    $("#wrapper").scrollLeft($("#myChart").width());
}
new Chart(ctx).Line(data, options);

