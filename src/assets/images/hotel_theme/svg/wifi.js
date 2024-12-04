import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function Wifi(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M12 19.5109L12.0108 19.4989"
        stroke={isDark ? appColors.white : '#4A4A4A'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2 8C8 3.5 16 3.5 22 8"
        stroke={isDark ? appColors.white : '#4A4A4A'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5 12C9 9 15 9 19 12"
        stroke={isDark ? appColors.white : '#4A4A4A'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.5 15.5C10.7504 14.1 13.2498 14.0996 15.5001 15.5"
        stroke={isDark ? appColors.white : '#4A4A4A'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
