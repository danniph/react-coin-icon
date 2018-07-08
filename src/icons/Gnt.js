import React from "react";
import Svg, { G, Circle, Path } from "svgs";
const Gnt = props => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle fill="#002D64" cx={16} cy={16} r={16} />
      <Path
        d="M20.799 4.574l1.283 1.284-2.429 2.496a4.81 4.81 0 0 1 .788 2.644 4.745 4.745 0 0 1-1.342 3.34 4.462 4.462 0 0 1-2.365 1.308v2.175a4.552 4.552 0 0 1 2.36 1.301 4.748 4.748 0 0 1 1.347 3.345 4.748 4.748 0 0 1-1.347 3.344A4.546 4.546 0 0 1 15.82 27.2a4.523 4.523 0 0 1-3.275-1.389 4.772 4.772 0 0 1-1.345-3.344c0-1.258.478-2.452 1.342-3.34a4.462 4.462 0 0 1 2.365-1.307v-2.176a4.559 4.559 0 0 1-2.36-1.302 4.772 4.772 0 0 1-1.347-3.345c0-1.258.478-2.452 1.346-3.344a4.546 4.546 0 0 1 3.275-1.39c.917 0 1.8.28 2.554.8l2.425-2.49h-.001zM15.82 19.568a2.699 2.699 0 0 0-1.981.843 2.934 2.934 0 0 0-.827 2.056c0 .774.294 1.496.827 2.056a2.751 2.751 0 0 0 1.98.842 2.7 2.7 0 0 0 1.98-.842c.534-.551.83-1.289.827-2.056 0-.773-.293-1.495-.83-2.06a2.695 2.695 0 0 0-1.976-.839zm1.976-6.496a2.938 2.938 0 0 0 .83-2.06 2.88 2.88 0 0 0-.826-2.056 2.75 2.75 0 0 0-1.98-.843 2.699 2.699 0 0 0-1.981.843 2.934 2.934 0 0 0-.827 2.056c0 .774.294 1.496.827 2.056a2.751 2.751 0 0 0 1.98.842c.76 0 1.459-.294 1.977-.838z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

export default Gnt;