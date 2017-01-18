import * as d3 from "d3";

// Example function: insert a histogram.
function insertSimpleD3Histogram(element, numberArrayJson) {
  var numbers = JSON.parse(numberArrayJson);

  var formatCount = d3.format(",.0f");

  var margin = {top: 10, right: 30, bottom: 30, left: 30},
      totalWidth = 600,
      totalHeight = 300,
      width = totalWidth - margin.right - margin.left,
      height = totalHeight - margin.top - margin.bottom;

  var x = d3.scaleLinear()
      .domain(d3.extent(numbers))
      .rangeRound([0, width]);

  var bins = d3.histogram()
      .domain(x.domain())
      .thresholds(x.ticks(16))
  (numbers);

  var y = d3.scaleLinear()
      .domain([0, d3.max(bins, function(d) { return d.length; })])
      .range([height, 0]);

  var g = d3.select(element).append('svg')
      .attr("width", totalWidth)
      .attr("height", totalHeight)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

  var bar = g.selectAll(".bar")
    .data(bins)
    .enter().append("g")
    .attr("class", "bar")
    .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; });

  bar.append("rect")
    .attr("x", 1)
    .attr("width", x(bins[1].x1) - x(bins[1].x0) - 2)
    .attr("height", function(d) { return height - y(d.length); });

  bar.append("text")
    .attr("dy", ".75em")
    .attr("y", 6)
    .attr("x", (x(bins[1].x1) - x(bins[1].x0)) / 2)
    .attr("text-anchor", "middle")
    .text(function(d) { return formatCount(d.length); });

  g.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));
}

export { insertSimpleD3Histogram };
