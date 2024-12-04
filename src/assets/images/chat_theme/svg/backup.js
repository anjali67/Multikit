import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function Backup(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M20.9966 3.49837V8.49837H15.9966"
        stroke={isDark ? appColors.white : '#384849'}
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.4895 13.2202C17.8393 15.0942 16.6087 16.7023 14.9829 17.802C13.3572 18.9018 11.4245 19.4338 9.4761 19.3177C7.52767 19.2016 5.66907 18.4438 4.18037 17.1585C2.69167 15.8732 1.65353 14.13 1.22238 12.1916C0.791239 10.2532 0.990449 8.2246 1.78999 6.41152C2.58954 4.59843 3.9461 3.09909 5.65526 2.13942C7.36442 1.17974 9.33358 0.811739 11.266 1.09086C13.1984 1.36997 14.9894 2.28109 16.3691 3.68691L21 8.12765"
        stroke={isDark ? appColors.white : '#384849'}
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
