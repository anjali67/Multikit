import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function Check(props) {
  return (
    <Svg
      width={props.width ? props.width : '17'}
      height={props.height ? props.height : '17'}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M13.3333 4L5.99996 11.3333L2.66663 8"
        stroke={props.color ? props.color : 'white'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.8'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
