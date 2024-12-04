import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';

export function Smile(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="#848F8F"
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8 14C8 14 9.50009 16.3636 12.0001 16.3636C14.5001 16.3636 16 14 16 14"
        stroke="#848F8F"
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9 9H9.00985"
        stroke="#848F8F"
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15 9H15.0098"
        stroke="#848F8F"
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
