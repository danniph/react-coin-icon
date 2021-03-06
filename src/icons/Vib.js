import React from "react";
import Svg, { G, Circle, Path } from "svgs";
const Vib = props => (
  <Svg viewBox="0 0 32 32" height={32} width={32} {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} fill="#ff1f43" r={16} />
      <Path d="M7 7h4.2l7.2 12.775V7H22v18h-4.8z" fill="#fff" />
    </G>
  </Svg>
);

export default Vib;
