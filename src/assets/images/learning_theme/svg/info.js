import Svg, {Path, G, Defs, ClipPath, Rect} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function Info(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <G clip-path="url(#clip0_163_686)">
        <Path
          d="M8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 7.99999C14.6668 4.3181 11.6821 1.33333 8.00016 1.33333C4.31826 1.33333 1.3335 4.3181 1.3335 7.99999C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667Z"
          stroke={props.color ? props.color : '#164150'}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8 10.6667V8"
          stroke={props.color ? props.color : '#164150'}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8 5.33333H8.00667"
          stroke={props.color ? props.color : '#164150'}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_163_686">
          <Rect width="16" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
