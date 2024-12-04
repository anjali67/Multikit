import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function PaymentIcon(props) {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M17.5 3.33334H2.49998C1.57951 3.33334 0.833313 4.07954 0.833313 5.00001V15C0.833313 15.9205 1.57951 16.6667 2.49998 16.6667H17.5C18.4205 16.6667 19.1666 15.9205 19.1666 15V5.00001C19.1666 4.07954 18.4205 3.33334 17.5 3.33334Z"
        stroke="#4A4A4A"
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M0.833313 8.33334H19.1666"
        stroke={props.color ? props.color : '#4A4A4A'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
