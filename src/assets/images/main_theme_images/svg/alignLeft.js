import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function AlignLeft(props) {
  return (
    <Svg
      width="25"
      height="22"
      viewBox="0 0 24 19"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M17.4572 10.6447H3.45715"
        stroke={props.color ? props.color : "white"}
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M21.4572 5.64465H3.45715"
        stroke={props.color ? props.color : "white"}
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M21.4572 15.6447H3.45715"
        stroke={props.color ? props.color : "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
