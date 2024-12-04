import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function Foodhome(props) {
  return (
    <Svg
      width="22"
      height="22"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M6.74789 12.2235H11.7525"
        stroke={props.color ? props.color : '#BCBCBC'}
        strokeWidth={1.6}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 10.3001C1 5.82911 1.52843 6.14115 4.37281 3.70754C5.61728 2.78332 7.5537 1 9.2259 1C10.8972 1 12.8724 2.77459 14.1281 3.70754C16.9724 6.14115 17.5 5.82911 17.5 10.3001C17.5 16.88 15.814 16.88 9.25 16.88C2.68597 16.88 1 16.88 1 10.3001Z"
        stroke={props.color ? props.color : '#BCBCBC'}
        strokeWidth={1.6}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
