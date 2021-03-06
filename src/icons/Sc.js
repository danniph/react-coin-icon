import React from "react";
import Svg, { G, Circle, Path } from "svgs";
const Sc = props => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#20EE82" />
      <Path
        fill="#FFF"
        d="M16 7.5a8.5 8.5 0 0 1 8.5 8.5v8.5H16a8.5 8.5 0 1 1 0-17zm5.1 13.6v-5.023c0-2.82-2.255-5.163-5.074-5.177a5.106 5.106 0 0 0-5.126 5.126c.014 2.819 2.358 5.074 5.177 5.074H21.1z"
      />
    </G>
  </Svg>
);

export default Sc;
