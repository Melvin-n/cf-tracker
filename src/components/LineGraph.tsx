import { useRef, useEffect } from "react";
import * as d3 from "d3";
import { TDateAndWeight } from "./GraphView";

const dummydata: TDateAndWeight[] = [
  { weight: 62, date: new Date("2022-01-03") },
  { weight: 61, date: new Date("2022-01-10") },
  { weight: 60, date: new Date("2022-01-16") },
  { weight: 62, date: new Date("2022-01-20") },
  { weight: 65, date: new Date("2022-01-22") },
];

const LineGraph = (): JSX.Element => {
  const width = 960;
  const height = 500;
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3
      .select(svgRef.current)
      .style("width", width)
      .style("height", height)
      .style("color", "black")
      .style("background", "white")
      .style("overflow", "visible");

    // scaling
    // x scale which scales by time, using values of dateList as start and end, across the range of width
    const xScale = d3
      .scaleTime()
      .domain([dummydata[0].date, dummydata[dummydata.length - 1].date])
      .range([0, width]);
    // y scale uses weight values as start and end, range of height
    const maxWeightPoint =
      d3.max(dummydata, (d) => d.weight + d.weight * 0.02) || 0;
    const minWeightPoint =
      d3.min(dummydata, (d) => d.weight - d.weight * 0.02) || 0;
    const yScale = d3
      .scaleLinear()
      .domain([minWeightPoint, maxWeightPoint])
      .range([height, 0]);

    //set up axes
    const xAxis = d3
      .axisBottom(xScale)
      .tickFormat(
        d3.timeFormat("%b %d") as (
          value: Date | { valueOf(): number },
          i: number
        ) => string
      );
    svg.append("g").call(xAxis).attr("transform", `translate(0, ${height})`);
    const yAxis = d3.axisLeft(yScale);
    svg.append("g").call(yAxis);

    svg
      .append("path")
      .datum(dummydata)
      .attr("fill", "none")
      .attr("stroke", "#69b3a2")
      .attr("stroke-width", 1.5)
      .attr(
        "d",
        d3
          .line<TDateAndWeight>()
          .x((d) => xScale(d.date))
          .y((d) => yScale(d.weight))
      );
    svg
      .append("g")
      .selectAll("dot")
      .data(dummydata)
      .join("circle")
      .attr("cx", (d) => xScale(d.date))
      .attr("cy", (d) => yScale(d.weight))
      .attr("r", 5)
      .attr("fill", "#69b3a2");
  }, []);

  return (
    <div className="graphContainer">
      {/* ref is a special attribute from useRef hook */}
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default LineGraph;
