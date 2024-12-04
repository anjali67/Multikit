import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';

export function Train(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M8.00717 5.83337H11.9927C13.1933 5.83337 14.1666 6.80667 14.1666 8.00729C14.1666 8.18738 14.0206 8.33337 13.8405 8.33337H6.15934C5.97924 8.33337 5.83325 8.18738 5.83325 8.00729C5.83325 6.80667 6.80654 5.83337 8.00717 5.83337Z"
        stroke="#4A4A4A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.44982 18.4824L6.44982 18.4824C6.39335 18.5954 6.27794 18.6667 6.15168 18.6667H5.51507C5.26727 18.6667 5.10611 18.4059 5.21693 18.1843L4.76972 17.9607L5.21693 18.1843L6.14239 16.3334H7.52436L6.44982 18.4824Z"
        fill="black"
        stroke="#4A4A4A"
      />
      <Path
        d="M13.5503 18.4824L12.4758 16.3334H13.8577L14.7832 18.1843C14.7832 18.1843 14.7832 18.1843 14.7832 18.1843C14.894 18.406 14.7328 18.6667 14.4851 18.6667H13.8484C13.7222 18.6667 13.6068 18.5954 13.5503 18.4824Z"
        fill="black"
        stroke="#4A4A4A"
      />
      <Path
        d="M7.5 2.5H12.5C15.2614 2.5 17.5 4.73858 17.5 7.5V10.8333C17.5 13.5948 15.2614 15.8333 12.5 15.8333H7.5C4.73857 15.8333 2.5 13.5948 2.5 10.8333V7.5C2.5 4.73858 4.73857 2.5 7.5 2.5Z"
        stroke="#4A4A4A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.3333 12.5091L13.3423 12.499"
        stroke="#4A4A4A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.66675 12.5091L6.67584 12.499"
        stroke="#4A4A4A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
