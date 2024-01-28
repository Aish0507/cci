/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { arc, interpolate, pie, scaleOrdinal, schemeGreens, select } from 'd3';
import { useEffect, useRef } from 'react';
import useResizeObserver from '@/lib/hooks/useResizeObserver';

function DonutChart({ data }) {
  const svgRef = useRef();
  const DwrapperRef = useRef();
  const dimensions = useResizeObserver(DwrapperRef);
  console.log(data);
  useEffect(() => {
    const svg = select(svgRef.current);
    // eslint-disable-next-line no-unused-vars
    const { width, height } = dimensions || DwrapperRef.current.getBoundingClientRect();
    if (!dimensions) return;

    // arc takes instructions (objects with special properties, like startAngle, endAngle, etc.)
    // and transforms them into "d" attributes for path elements
    const arcGenerator = arc().innerRadius(0).outerRadius(100);

    // pie will transform data to instructions for arcGenerator
    const pieGenerator = pie()
      .value((d) => d.value)
      .sort(null); // makes sure data doesn't get sorted

    // now transform data to instructions for arc()
    const instructions = pieGenerator(data);

    // generate colorScale
    // https://github.com/d3/d3-scale-chromatic
    const colorScale = scaleOrdinal(schemeGreens[3]);

    // render slices (instructions)
    svg
      .selectAll('.slice')
      .data(instructions)
      .join('path')
      .attr('class', 'slice')
      .attr('fill', (d, i) => colorScale(i))
      .style('transform', `translate(${dimensions.width / 3}px, ${dimensions.height / 3}px)`)
      .transition()
      .attrTween('d', function (nextInstruction) {
        // animation when changing data
        const interpolator = interpolate(this.lastInstruction, nextInstruction);
        this.lastInstruction = interpolator(1);
        return function (t) {
          return arcGenerator(interpolator(t));
        };
      });
    // .attr('text-anchor', 'middle')
    // .text(10 + '%');
  }, [data, dimensions]);

  return (
    <div ref={DwrapperRef} style={{ marginBottom: '2rem' }}>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default DonutChart;
