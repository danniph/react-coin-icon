import React from "react";
import Svg, { G, Circle, Path } from "svgs";
const Storm = props => (
  <Svg viewBox="0 0 32 32" height={32} width={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#080d98" r={16} />
      <Path
        d="M23 6l-12.029 8.25 6.076 3.875L9 26l13.302-9.208-5.994-3.875z"
        fill="#fff"
      />
    </G>
  </Svg>
);

export default Storm;
