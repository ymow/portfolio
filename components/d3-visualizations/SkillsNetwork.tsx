"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { skillsNetwork } from "@/lib/data";

export default function SkillsNetwork() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = svgRef.current.clientWidth;
    const height = 600;

    // Clear previous content
    svg.selectAll("*").remove();

    const g = svg.append("g");

    // Clone data to avoid mutating original
    const nodes = skillsNetwork.nodes.map((d) => ({ ...d }));
    const links = skillsNetwork.links.map((d) => ({ ...d }));

    // Create simulation
    const simulation = d3
      .forceSimulation(nodes as any)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d: any) => d.id)
          .distance(80)
          .strength((d: any) => d.strength || 0.5)
      )
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius((d: any) => d.size + 10));

    // Create links
    const link = g
      .append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", "rgba(255, 255, 255, 0.1)")
      .attr("stroke-width", 1);

    // Create nodes
    const node = g
      .append("g")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .style("cursor", "pointer")
      .call(
        d3
          .drag<any, any>()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );

    // Add circles
    node
      .append("circle")
      .attr("r", (d: any) => d.size / 2)
      .attr("fill", (d: any) => skillsNetwork.categoryColors[d.category as keyof typeof skillsNetwork.categoryColors])
      .attr("stroke", "rgba(255, 255, 255, 0.3)")
      .attr("stroke-width", 2)
      .style("filter", "drop-shadow(0 0 10px currentColor)")
      .on("mouseenter", function (event, d: any) {
        setHoveredNode(d.id);
        d3.select(this).transition().duration(200).attr("r", d.size / 2 + 5);

        // Highlight connected nodes
        link
          .transition()
          .duration(200)
          .attr("stroke", (l: any) =>
            l.source.id === d.id || l.target.id === d.id
              ? skillsNetwork.categoryColors[d.category as keyof typeof skillsNetwork.categoryColors]
              : "rgba(255, 255, 255, 0.1)"
          )
          .attr("stroke-width", (l: any) =>
            l.source.id === d.id || l.target.id === d.id ? 2 : 1
          );
      })
      .on("mouseleave", function (event, d: any) {
        setHoveredNode(null);
        d3.select(this).transition().duration(200).attr("r", d.size / 2);

        link
          .transition()
          .duration(200)
          .attr("stroke", "rgba(255, 255, 255, 0.1)")
          .attr("stroke-width", 1);
      });

    // Add labels
    node
      .append("text")
      .text((d: any) => d.label)
      .attr("text-anchor", "middle")
      .attr("dy", (d: any) => d.size / 2 + 15)
      .attr("fill", "#FFFFFF")
      .attr("font-size", (d: any) => Math.max(10, d.size / 4))
      .attr("font-weight", "600")
      .style("pointer-events", "none")
      .style("user-select", "none");

    // Update positions on simulation tick
    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    });

    // Drag functions
    function dragstarted(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event: any, d: any) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    return () => {
      simulation.stop();
    };
  }, []);

  const hoveredSkill = skillsNetwork.nodes.find((node) => node.id === hoveredNode);

  return (
    <div className="space-y-6">
      <svg ref={svgRef} width="100%" height="600" className="overflow-visible" />

      {hoveredSkill && (
        <div className="glass p-6 rounded-xl text-center animate-fade-in">
          <h4 className="text-xl font-bold text-text-primary mb-2">
            {hoveredSkill.label}
          </h4>
          <div className="flex items-center justify-center gap-4">
            <span className="text-text-secondary">Proficiency:</span>
            <div className="flex-1 max-w-xs h-2 bg-background-tertiary rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${hoveredSkill.proficiency}%`,
                  backgroundColor: skillsNetwork.categoryColors[hoveredSkill.category as keyof typeof skillsNetwork.categoryColors],
                }}
              />
            </div>
            <span className="text-accent-primary font-semibold">
              {hoveredSkill.proficiency}%
            </span>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4">
        {Object.entries(skillsNetwork.categoryColors).map(([category, color]) => (
          <div key={category} className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span className="text-text-secondary text-sm capitalize">
              {category.replace("-", " ")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
