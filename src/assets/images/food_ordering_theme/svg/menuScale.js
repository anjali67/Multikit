import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function MenuScale(props) {
  return (
    <Svg
      width="22"
      height="24"
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M2.75 5H10.0833"
        stroke={props.color ? props.color : 'white'}
        strokeWidth={props.strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2.75 11H14.6667"
        stroke={props.color ? props.color : 'white'}
        strokeWidth={props.strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2.75 17H19.25"
        stroke={props.color ? props.color : 'white'}
        strokeWidth={props.strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
