import React from "react";
import Svg, { G, Circle, Path } from "svgs";
const Xvc = props => (
  <Svg viewBox="0 0 32 32" height={32} width={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#b50126" r={16} />
      <Path
        d="M10.118 10.743H8L9.664 8h4.134v10.717L21.714 8H26L14.857 24h-4.739z"
        fill="#fff"
      />
    </G>
  </Svg>
);

export default Xvc;
