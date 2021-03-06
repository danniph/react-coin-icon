import React from "react";
import Svg, { G, Circle, Path } from "svgs";
const Ost = props => (
  <Svg viewBox="0 0 32 32" height={32} width={32} {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} fill="#bbdfd0" r={16} />
      <Path
        d="M23.082 23.998c-1.769-1.727-3.95-2.441-6.363-2.59-2.053-.127-4.016.217-5.852 1.158a7.15 7.15 0 0 0-1.836 1.333c-.035.036-.076.068-.113.101A10.609 10.609 0 0 1 7.875 8.506c4.32-4.653 11.84-4.68 16.2-.048a10.603 10.603 0 0 1-.993 15.54zM12.02 15.795c.001 2.161 1.77 3.9 3.971 3.904 2.212.004 4.003-1.74 4.005-3.899.003-2.152-1.801-3.915-4-3.91-2.196.005-3.977 1.755-3.976 3.905z"
        fill="#fff"
      />
    </G>
  </Svg>
);

export default Ost;
