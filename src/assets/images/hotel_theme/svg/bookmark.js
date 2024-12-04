import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function BookMark(props) {
  return (
    <Svg
      width={props.width ? props.width : '20'}
      height={props.height ? props.height : '20'}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M15.8334 17.5L10 13.3333L4.16669 17.5V4.16667C4.16669 3.72464 4.34228 3.30072 4.65484 2.98816C4.9674 2.67559 5.39133 2.5 5.83335 2.5H14.1667C14.6087 2.5 15.0326 2.67559 15.3452 2.98816C15.6578 3.30072 15.8334 3.72464 15.8334 4.16667V17.5Z"
        stroke={props.color ? props.color : '#4A4A4A'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.5'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
