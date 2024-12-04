import Svg, {Path, Rect} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function ArrowRight(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width={props.width ? props.width : '24'}
      height={props.height ? props.height : '24'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M18.5 12L12.5 18M6 12H18.5H6ZM18.5 12L12.5 6L18.5 12Z"
        stroke={props.color ? props.color : 'white'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.5'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
