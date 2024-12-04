import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function FoodUser(props) {
  return (
    <Svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M4.58333 18.3333V17.4167C4.58333 13.8728 7.45617 11 11 11C14.5438 11 17.4167 13.8728 17.4167 17.4167V18.3333"
        stroke={props.color ? props.color : '#BCBCBC'}
        strokeWidth={1.8}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11 11C13.025 11 14.6667 9.3583 14.6667 7.33329C14.6667 5.30825 13.025 3.66663 11 3.66663C8.97495 3.66663 7.33333 5.30825 7.33333 7.33329C7.33333 9.3583 8.97495 11 11 11Z"
        stroke={props.color ? props.color : '#BCBCBC'}
        strokeWidth={1.8}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
