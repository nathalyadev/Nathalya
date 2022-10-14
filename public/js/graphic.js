// Load the Visualization API and the corechart package.
google.charts.load("current", { packages: ["corechart"] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Topping");
  data.addColumn("number", "Slices");
  data.addRows([
    ["HTML", 3],
    ["CSS", 3],
    ["Javascript", 2],
    ["Figma", 2],
    ["Git", 1],
  ]);

  // Set chart options
  var options = {
    width: 320,
    height: 300,
    pieHole: 0.6,
    backgroundColor: "transparent",
    pieSliceTextStyle: {
      color: "#fff",
    },
    slices: {
      0: { color: "#9067c6" },
      1: { color: "#8d86c9" },
      2: { color: "#cac4ce" },
      3: { color: "#f7ece1" },
      4: { color: "#f1e3f3" },
    },
    legend: {
        textStyle: {color: '#fff'}
    }
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(
    document.getElementById("chartDiv")
  );
  chart.draw(data, options);
}
