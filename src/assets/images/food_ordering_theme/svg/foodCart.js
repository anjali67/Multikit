import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function Foodcart(props) {
  return (
    <Svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M2.75 5.50004L2.0625 3.20837M2.75 5.50004H20.1667L17.4167 14.6667H5.5L2.75 5.50004Z"
        stroke={props.color ? props.color : '#BCBCBC'}
        strokeWidth={1.8}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.0833 17.875C10.0833 18.6344 9.4677 19.25 8.70834 19.25C7.94894 19.25 7.33334 18.6344 7.33334 17.875"
        stroke={props.color ? props.color : '#BCBCBC'}
        strokeWidth={1.8}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15.5833 17.875C15.5833 18.6344 14.9677 19.25 14.2083 19.25C13.449 19.25 12.8333 18.6344 12.8333 17.875"
        stroke={props.color ? props.color : '#BCBCBC'}
        strokeWidth={1.8}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
