import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function HelpCircle(props) {
  const {isDark} = useValues();
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={isDark ? appColors.white : '#384849'}
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.08984 9.00001C9.32495 8.33167 9.789 7.76811 10.3998 7.40914C11.0106 7.05016 11.7287 6.91894 12.427 7.03872C13.1253 7.15849 13.7587 7.52153 14.2149 8.06353C14.6712 8.60554 14.9209 9.29153 14.9198 10C14.9198 12 11.9198 13 11.9198 13"
        stroke={isDark ? appColors.white : '#384849'}
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 17H12.01"
        stroke={isDark ? appColors.white : '#384849'}
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
