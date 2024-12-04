import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';

export function ArrowDown(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width={props.width ? props.width : "14"}
      height={props.height ? props.height : "8"}
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M1 1L7 7L13 1"
        stroke={props.color ? props.color : "#A3A3A3"}
        strokeWidth={props.strokeWidth ? props.strokeWidth : "2"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
