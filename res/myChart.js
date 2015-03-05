// Get context with jQuery - using jQuery's .get() method.
var ctx = $("#myChart").get(0).getContext("2d");
// This will get the first returned node in the jQuery collection.
ctx.canvas.width  = window.innerWidth/2;
ctx.canvas.height = window.innerHeight/4;
function getGoldPrice() {
    var array = [];
    $(".downloadedData").each(function () {
        array.push($(this).text());

    });
    return array

}
function getDays(){
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
var options={
    responsive: true,
    bezierCurve : false
};

new Chart(ctx).Line(data,options);

