import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function Cross(props) {
  return (
    <Svg
      width={props.width ? props.width : '19'}
      height={props.height ? props.height : '20'}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M12 4.43213L4 12.4321"
        stroke={props.color ? props.color : '#8F8FB2'}
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeWidth={props.strokeWidth}
      />
      <Path
        d="M4 4.43213L12 12.4321"
        stroke={props.color ? props.color : '#8F8FB2'}
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeWidth={props.strokeWidth}
      />
    </Svg>
  );
}
