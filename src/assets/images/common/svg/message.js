import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';

export function Message(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M3.33317 3.33334H16.6665C17.5832 3.33334 18.3332 4.08334 18.3332 5.00001V15C18.3332 15.9167 17.5832 16.6667 16.6665 16.6667H3.33317C2.4165 16.6667 1.6665 15.9167 1.6665 15V5.00001C1.6665 4.08334 2.4165 3.33334 3.33317 3.33334Z"
        stroke="#433417"
        strokeWidth="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.3332 5L9.99984 10.8333L1.6665 5"
        stroke="#3E3E3E"
        strokeWidth="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
