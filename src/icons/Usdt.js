import React from "react";
import Svg, { G, Circle, Path } from "svgs";
const Usdt = props => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle fill="#3AA787" cx={16} cy={16} r={16} />
      <Path
        d="M17.975 13.868v-2.38h5.443V7.861H8.596v3.627h5.444v2.378c-4.424.203-7.75 1.08-7.75 2.13 0 1.049 3.328 1.925 7.75 2.13v7.623h3.936v-7.624c4.416-.204 7.736-1.08 7.736-2.128 0-1.049-3.32-1.924-7.736-2.128m0 3.61v-.002a32.3 32.3 0 0 1-1.952.041c-1.016 0-1.73-.028-1.982-.042v.004c-3.909-.173-6.826-.854-6.826-1.668 0-.815 2.918-1.495 6.826-1.668v2.658c.256.017.988.06 1.999.06 1.213 0 1.824-.05 1.936-.06v-2.658c3.9.174 6.811.855 6.811 1.667 0 .811-2.912 1.493-6.811 1.666"
        fill="#FFF"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default Usdt;
