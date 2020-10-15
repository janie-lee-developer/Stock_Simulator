//--------------------------- Charts 1 --------------------------
window.onload = function chart2() {
    var dataPoints = [], currentDate = new Date(), rangeChangedTriggered = false;

    var stockChart1 = new CanvasJS.StockChart("chartContainer_1", {
        theme: "light2", //"light2", "dark1", "dark2"
        //   title:{
        //     text:"Dynamic StockChart"
        //   },
        rangeChanged: function (e) {
            rangeChangedTriggered = true;
        },
        charts: [{
            axisX: {
                crosshair: {
                    enabled: true,
                    valueFormatString: "MMM DD, YYYY HH:mm:ss"
                }
            },
            axisY: {
                title: "Pice Per Share ($)"
            },
            toolTip: {
                shared: true
            },
            data: [{
                type: "line",
                name: "Price per Share ($)",
                xValueFormatString: "MMM DD, YYYY HH:mm:ss",
                xValueType: "dateTime",
                dataPoints: dataPoints
            }]
        }],
        navigator: {
            slider: {
                minimum: new Date(currentDate.getTime() - (90 * 1000))
            },
            axisX: {
                labelFontColor: "white"
            }
        },
        rangeSelector: {
            enabled: false
        }
    });

    var stockChart2 = new CanvasJS.StockChart("chartContainer_2", {
        theme: "light2", //"light2", "dark1", "dark2"
        //   title:{
        //     text:"Dynamic StockChart"
        //   },
        rangeChanged: function (e) {
            rangeChangedTriggered = true;
        },
        charts: [{
            axisX: {
                crosshair: {
                    enabled: true,
                    valueFormatString: "MMM DD, YYYY HH:mm:ss"
                }
            },
            axisY: {
                title: "Pice Per Share ($)"
            },
            toolTip: {
                shared: true
            },
            data: [{
                type: "line",
                name: "Price per Share ($)",
                xValueFormatString: "MMM DD, YYYY HH:mm:ss",
                xValueType: "dateTime",
                dataPoints: dataPoints
            }]
        }],
        navigator: {
            slider: {
                minimum: new Date(currentDate.getTime() - (90 * 1000))
            },
            axisX: {
                labelFontColor: "white"
            }
        },
        rangeSelector: {
            enabled: false
        }
    });

    var dataCount = 60,
        ystart = 0,
        interval = 1000, xstart = (currentDate.getTime() - (700 * 1000));

    updateChart(xstart, ystart, dataCount, interval);
    function updateChart(xstart, ystart, length, interval) { //length = dataCount
        var xVal = xstart;
        var yVal = ystart;
        for (var i = 0; i < length; i++) { //50 times i loops
            yVal = yVal + Math.round(5 + Math.random() * (-5 - 5)); //random Y number created between -5 ~ 5.
            yVal = Math.min(Math.max(yVal, 5), 90); //Whatever the random Y value was, it changes to 5. 
            dataPoints.push({ x: xVal, y: yVal });
            xVal += interval;
        }
        if (!rangeChangedTriggered) {
            stockChart1.options.navigator.slider.minimum = new Date(xVal - (90 * 1000));
            stockChart2.options.navigator.slider.minimum = new Date(xVal - (90 * 1000));
        }
        xstart = xVal;
        dataCount = 1;
        ystart = yVal;
        stockChart1.render();
        stockChart2.render();
        
        // var id1 = setTimeout(updateChart1, 1000, xstart, price_1, dataCount, interval);
        // var id1 = setTimeout(function () { updateChart1(xstart, price_1, dataCount, interval); }, 1000);
    }
    
    var id0 = setInterval(function () { updateChart0(xstart, price_0, dataCount, interval); }, 1000);
    // setInterval(updateChart0, 1000, xstart, price_0, dataCount, interval);


    // function updateChart1(xstart, ystart, length, interval) { //length = dataCount
    //     var xVal = xstart;
    //     var yVal = ystart;
    //     for (var i = 0; i < length; i++) { //50 times i loops
    //         yVal = yVal + Math.round(5 + Math.random() * (-5 - 5)); //random Y number created between -5 ~ 5.
    //         yVal = Math.min(Math.max(yVal, 5), 90); //Whatever the random Y value was, it changes to 5. 
    //         dataPoints.push({ x: xVal, y: yVal });
    //         xVal += interval;
    //     }
    //     if (!rangeChangedTriggered) {
    //         stockChart2.options.navigator.slider.minimum = new Date(xVal - (90 * 1000));
    //     }
    //     xstart = xVal;
    //     dataCount = 1;
    //     ystart = yVal;
    //     stockChart2.render();
    //     setTimeout(updateChart1, 1000, xstart, price_1, dataCount, interval);
    //     // var id1 = setTimeout(updateChart1, 1000, xstart, price_1, dataCount, interval);
    //     // var id1 = setTimeout(function () { updateChart1(xstart, price_1, dataCount, interval); }, 1000);
    // }
    // updateChart1(xstart, ystart, dataCount, interval);

}
