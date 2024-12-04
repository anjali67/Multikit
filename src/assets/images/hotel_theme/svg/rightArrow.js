import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function RightArrow(props) {
  return (
    <Svg
      width={props.width ? props.width : '24'}
      height={props.height ? props.height : '24'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M9 18L15 12L9 6"
        stroke={props.color ? props.color : '#4A4A4A'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : "1.5"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
