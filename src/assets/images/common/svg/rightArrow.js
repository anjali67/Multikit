import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function RightArrow(props) {
  return (
    <Svg
      width={props.width ? props.width : '17'}
      height={props.height ? props.height : '22'}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M6.02075 3.54168L10.9791 8.50001L6.02075 13.4583"
        stroke={props.color ? props.color : 'white'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : "1.7"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
