import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';

export function DoubleCheck(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width={props.height ? props.height : '18'}
      height={props.width ? props.width : '18'}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M17.5 5L7.875 14.1667L3.5 10"
        stroke="#848F8F"
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.2'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16 3L7.75 11L4 7.36364"
        stroke="#848F8F"
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
