import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function Sliders(props) {
  return (
    <Svg
      width="18"
      height="18"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M2.6665 14V9.33333"
        stroke={props.color ? props.color : '#A3A3A3'}
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeWidth={props.strokeWidth}
      />
      <Path
        d="M2.6665 6.66667V2"
        stroke={props.color ? props.color : '#A3A3A3'}
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeWidth={props.strokeWidth}
      />
      <Path
        d="M8 14V8"
        stroke={props.color ? props.color : '#A3A3A3'}
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeWidth={props.strokeWidth}
      />
      <Path
        d="M8 5.33333V2"
        stroke={props.color ? props.color : '#A3A3A3'}
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeWidth={props.strokeWidth}
      />
      <Path
        d="M13.3335 14V10.6667"
        stroke={props.color ? props.color : '#A3A3A3'}
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeWidth={props.strokeWidth}
      />
      <Path
        d="M13.3335 8V2"
        stroke={props.color ? props.color : '#A3A3A3'}
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeWidth={props.strokeWidth}
      />
      <Path
        d="M0.666504 9.33333H4.6665"
        stroke={props.color ? props.color : '#A3A3A3'}
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeWidth={props.strokeWidth}
      />
      <Path
        d="M6 5.33333H10"
        stroke={props.color ? props.color : '#A3A3A3'}
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeWidth={props.strokeWidth}
      />
      <Path
        d="M11.3335 10.6667H15.3335"
        stroke={props.color ? props.color : '#A3A3A3'}
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeWidth={props.strokeWidth}
      />
    </Svg>
  );
}
