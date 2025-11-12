"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { careerTimeline } from "@/lib/data";

export default function TimelineChart() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = svgRef.current.clientWidth;
    const height = 400;

    // Clear previous content
    svg.selectAll("*").remove();

    // Set up scales
    const xScale = d3
      .scalePoint()
      .domain(careerTimeline.map((d) => d.id))
      .range([100, width - 100])
      .padding(0.5);

    // Create main group
    const g = svg.append("g");

    // Draw connecting line
    g.append("path")
      .datum(careerTimeline)
      .attr("fill", "none")
      .attr("stroke", "url(#timeline-gradient)")
      .attr("stroke-width", 3)
      .attr(
        "d",
        d3
          .line<typeof careerTimeline[0]>()
          .x((d) => xScale(d.id) || 0)
          .y(height / 2)
          .curve(d3.curveCatmullRom)
      );

    // Add gradient
    const gradient = svg
      .append("defs")
      .append("linearGradient")
      .attr("id", "timeline-gradient")
      .attr("x1", "0%")
      .attr("x2", "100%");

    gradient.append("stop").attr("offset", "0%").attr("stop-color", "#00F5FF");
    gradient.append("stop").attr("offset", "50%").attr("stop-color", "#FF00E5");
    gradient.append("stop").attr("offset", "100%").attr("stop-color", "#39FF14");

    // Draw nodes
    const nodes = g
      .selectAll(".timeline-node")
      .data(careerTimeline)
      .join("g")
      .attr("class", "timeline-node")
      .attr("transform", (d) => `translate(${xScale(d.id)},${height / 2})`)
      .style("cursor", "pointer");

    // Add circles
    nodes
      .append("circle")
      .attr("r", 12)
      .attr("fill", (d) => d.color)
      .attr("stroke", "rgba(255, 255, 255, 0.3)")
      .attr("stroke-width", 2)
      .style("filter", "drop-shadow(0 0 10px currentColor)")
      .on("mouseenter", function (event, d) {
        d3.select(this).transition().duration(200).attr("r", 16);
        setSelectedNode(d.id);
      })
      .on("mouseleave", function () {
        d3.select(this).transition().duration(200).attr("r", 12);
      });

    // Add company names
    nodes
      .append("text")
      .text((d) => d.company)
      .attr("y", -30)
      .attr("text-anchor", "middle")
      .attr("fill", "#FFFFFF")
      .attr("font-size", "14px")
      .attr("font-weight", "600");

    // Add period
    nodes
      .append("text")
      .text((d) => d.period)
      .attr("y", 40)
      .attr("text-anchor", "middle")
      .attr("fill", "#B3B3B3")
      .attr("font-size", "12px");

  }, []);

  const selectedJob = careerTimeline.find((job) => job.id === selectedNode);

  return (
    <div className="space-y-8">
      <svg ref={svgRef} width="100%" height="400" className="overflow-visible" />

      {selectedJob && (
        <div className="glass p-8 rounded-xl animate-fade-in">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                {selectedJob.role}
              </h3>
              <p className="text-accent-primary font-semibold">{selectedJob.company}</p>
              <p className="text-text-secondary text-sm">
                {selectedJob.period} • {selectedJob.location}
              </p>
            </div>
          </div>

          <p className="text-text-secondary mb-6">{selectedJob.description}</p>

          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-text-primary">Key Achievements:</h4>
            <ul className="space-y-2">
              {selectedJob.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-3 text-text-secondary">
                  <span className="text-accent-primary mt-1">▸</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {selectedJob.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-sm rounded-full glass text-text-secondary"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
