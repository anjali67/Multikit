import Svg, {Path, Rect, Defs, G, ClipPath} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function MapIcon(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="14"
      height="23"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <G clip-path="url(#clip0_411_859)">
        <Path
          d="M0.666504 4.00001V14.6667L5.33317 12L10.6665 14.6667L15.3332 12V1.33334L10.6665 4.00001L5.33317 1.33334L0.666504 4.00001Z"
          stroke={isDark ? appColors.white : "#3E3E3E"}
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M5.3335 1.33334V12"
          stroke={isDark ? appColors.white : "#3E3E3E"}
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10.6665 4V14.6667"
          stroke={isDark ? appColors.white : "#3E3E3E"}
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_411_859">
          <Rect width="16" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
