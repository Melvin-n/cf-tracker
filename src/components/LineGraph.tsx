import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";
import { SvgIconClassKey } from "@mui/material";
import { TDateAndWeight } from "./GraphView";

type margins = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

const dummydata: TDateAndWeight[] = [
  { weight: 60, date: new Date("2022-01-16") },
  { weight: 62, date: new Date("2022-02-16") },
  { weight: 65, date: new Date("2022-03-16") },
  { weight: 61, date: new Date("2022-05-16") },
  { weight: 62, date: new Date("2022-06-16") },
];

const LineGraph = (): JSX.Element => {
  const lineGraphMargin = { top: 50, right: 30, bottom: 30, left: 30 };
  const svgRef = useRef(null);
  const [dateList, setDateList] = useState<Date[]>(
    dummydata.map((d) => d.date)
  );
  const [weightList, setWeightList] = useState<number[]>(
    dummydata.map((d) => d.weight)
  );
  const [data] = useState<{ x: Date; y: number }[]>(
    dummydata.map((data) => {
      return { x: data.date, y: data.weight };
    })
  );

  useEffect(() => {
    setDateList(dummydata.map((d) => d.date));
    setWeightList(dummydata.map((d) => d.weight));

    console.log(svgRef);

    const width = 960,
      height = 500;

    const svg = d3
      .select(svgRef.current)
      .style("width", width)
      .style("height", height)
      .style("color", "blue")
      .style("background", "red")
      .style("background", "green");

    // const w = 500;
    // const h = 500;
    // const svg = d3
    //   .select(svgRef.current)
    //   .attr("width", w)
    //   .attr("height", h)
    //   .style("background", "#d3d3d3");

    // const xScale = d3
    //   .scaleTime()
    //   .domain([dateList[0], dateList[dateList.length - 1]])
    //   .range([0, w]);
    // const yScale = d3
    //   .scaleLinear()
    //   .domain([weightList[0], weightList[weightList.length - 1]])
    //   .range([h, 0]);
    // const generateScaledLine = d3
    //   .line()
    //   .x((d) => xScale(d[0]))
    //   .y((d) => yScale(d[1]))
    //   .curve(d3.curveCardinal);

    // svg
    //   .selectAll(".line")
    //   .data([data])
    //   .join("path")
    //   .attr("d", (d) => generateScaledLine(d))
    //   .attr("fill", "none")
    //   .attr("stroke", "black");
  }, []);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default LineGraph;
