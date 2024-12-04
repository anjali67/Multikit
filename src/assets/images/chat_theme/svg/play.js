import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';

export function Play(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width={props.width ? props.width : "8"}
      height={props.height ? props.height : "10"}
      viewBox="0 0 8 10"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M0.833252 0.666668L7.33325 5L0.833252 9.33333V0.666668Z"
        fill={props.color ? props.color : "white"}
        stroke={props.color ? props.color : "white"}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
