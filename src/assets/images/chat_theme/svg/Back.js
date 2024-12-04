import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function Back(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width={props.width ? props.width : '29'}
      height={props.height ? props.height : '49'}
      viewBox="0 0 29 29"
      fill="none"
     >
      <Path
        d="M18.125 21.75L10.875 14.5L18.125 7.25"
        stroke={
          props.color ? props.color : isDark ? appColors.white : '#384849'
        }
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.5'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
