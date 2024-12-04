import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function Swap(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="17"
      height="33"
      viewBox="0 0 17 15"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        opacity="0.4"
        d="M12.3313 13.9633V3.1826"
        stroke={isDark ? appColors.white : appColors.reviewText}
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15.5595 10.7206L12.3313 13.9638L9.10303 10.7206"
        stroke={isDark ? appColors.white : appColors.reviewText}
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        opacity="0.4"
        d="M4.47131 1.03437V11.8151"
        stroke={isDark ? appColors.white : appColors.reviewText}
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1.24316 4.27712L4.4714 1.03393L7.69965 4.27712"
        stroke={isDark ? appColors.white : appColors.reviewText}
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
