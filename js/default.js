var gauge_settings = {
  angle: 0, // The span of the gauge arc
  lineWidth: 0.34, // The line thickness
  radiusScale: 0.86, // Relative radius
  pointer: {
    length: 0.48, // // Relative to gauge radius
    strokeWidth: 0.04, // The thickness
    color: '#000000' // Fill color
  },
  limitMax: false,     // If false, max value increases automatically if value > maxValue
  limitMin: false,     // If true, the min value of the gauge will be fixed
  colorStart: '#6FADCF',   // Colors
  colorStop: '#8FC0DA',    // just experiment with them
  strokeColor: '#E0E0E0',  // to see which ones work best for you
  generateGradient: true,
  highDpiSupport: true,     // High resolution support
  percentColors: [[0.0, "#ff0000" ], [0.50, "#f9c802"], [1.0, "#a9d70b"]],
  staticLabels: {
    font: "10px sans-serif",  // Specifies font
    labels: [100, 130, 150, 220.1, 260, 300],  // Print labels at these values
    color: "#000000",  // Optional: Label text color
    fractionDigits: 0  // Optional: Numerical precision. 0=round off.
  },
  pointer: {
    // Extra optional pointer options:
    iconPath: 'myicon.png',  // Icon image source
    iconScale: 1,    // Size scaling factor
    iconAngle: 90.0  // Rotation offset angle, degrees
  },
};

var plot_settings = {
  series: {
    lines: {
      show: false,
      fill: true
    },
    splines: {
      show: true,
      tension: 0.4,
      lineWidth: 1,
      fill: 0.4
    },
    points: {
      radius: 0,
      show: true
    },
    shadowSize: 2
  },
  grid: {
    verticalLines: true,
    hoverable: true,
    clickable: true,
    tickColor: "#d5d5d5",
    borderWidth: 1,
    color: '#fff'
  },
  colors: ["rgba(38, 185, 154, 0.38)"],
  xaxis: {
    tickColor: "rgba(51, 51, 51, 0.06)",
    mode: "time",
    tickSize: [6, "month"],
    //tickLength: 10,
    axisLabel: "Date",
    axisLabelUseCanvas: true,
    axisLabelFontSizePixels: 12,
    axisLabelFontFamily: 'Verdana, Arial',
    axisLabelPadding: 10
  },
  yaxis: {
    ticks: 10,
    tickColor: "rgba(51, 51, 51, 0.06)",
  },
  tooltip: true
}

var arr_data1 = [
  [gd(2015, 1, 1), 15],
  [gd(2015, 7, 1), 30],
  [gd(2016, 1, 1), 40],
  [gd(2016, 7, 1), 35],
  [gd(2017, 1, 1), 30],
  [gd(2017, 7, 1), 35],
  [gd(2017, 10, 2), 40],
];

$(document).ready(function() {
  if ($('.quizz').length) {
    $('.quizz').slick({
      dots: true,
      draggable: false
    });
  }
  
  $('.next-slick').on('click', function(event){
    $('.quizz').slick('slickNext');
  });
  
  if ($('#gauge').length) {
    var gauge_elem = document.getElementById('gauge');
    var gauge = new Gauge(gauge_elem).setOptions(gauge_settings);
    gauge.maxValue = 60; // set max gauge value
    gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 55; // set animation speed (32 is default value)
    gauge.set(55); // set actual value
  }	
  
  if ($('#plot').length) {
    $.plot( $("#plot"), [ arr_data1 ],  plot_settings );
  }
})
