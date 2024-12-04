import Svg, {Path, Rect, Defs, G, ClipPath} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function Alert(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <G clip-path="url(#clip0_430_477)">
        <Path
          d="M10.0001 18.3333C14.6025 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6025 1.66667 10.0001 1.66667C5.39771 1.66667 1.66675 5.39763 1.66675 10C1.66675 14.6024 5.39771 18.3333 10.0001 18.3333Z"
          stroke={props.color ? props.color : appColors.cabText}
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10 6.66667V10"
          stroke={props.color ? props.color : appColors.cabText}
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10 13.3333H10.0083"
          stroke={props.color ? props.color : appColors.cabText}
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_430_477">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
