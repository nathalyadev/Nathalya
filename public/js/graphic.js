google.charts.load("current", { packages: ["corechart"] });

google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Topping");
  data.addColumn("number", "Slices");
  data.addRows([
    ["HTML", 3],
    ["CSS", 3],
    ["Javascript", 2],
    ["Figma", 3],
    ["Git", 1],
    ["Electron Js", 1],
    ["VueJs", 1],
  ]);

  var options = {
    width: 500,
    height: 400,
    pieHole: 0.5,
    backgroundColor: "#F1F1F1",
    pieSliceTextStyle: {
      color: "#000",
    },
    slices: {
      0: { color: "#59518C" },
      1: { color: "#756CBF" },
      2: { color: "#CAACF2" },
      3: { color: "#9B9BC1" },
      4: { color: "#676F9D" },
      5: { color: "#BEB3D5" },
      6: { color: "#7E77C8" },
    },
    legend: {
      textStyle: { color: "#000" },
    },
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("chartDiv")
  );
  chart.draw(data, options);
}
