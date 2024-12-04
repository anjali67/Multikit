import Svg, {Path} from 'react-native-svg';
import React from 'react';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export function Drawer(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="24"
      height={props.height ? props.height : "19"}
      viewBox="0 0 24 19"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M17.4572 10.6447H3.45715"
        stroke={isDark ? appColors.white : props.color ? props.color : '#4A4A4A'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : "1.5"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M21.4572 5.64465H3.45715"
        stroke={isDark ? appColors.white :  props.color ? props.color : '#4A4A4A'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : "1.5"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M21.4572 15.6447H3.45715"
        stroke={isDark ? appColors.white :  props.color ? props.color : '#4A4A4A'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : "1.5"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
