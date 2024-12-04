import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';

export function Play(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width={props.width ? props.width : '15'}
      height={props.height ? props.height : '24'}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M4.02843 2.64648C3.79512 2.50822 3.5 2.67638 3.5 2.94758V11.0524C3.5 11.3236 3.79512 11.4918 4.02843 11.3535L10.8669 7.30112C11.0956 7.16555 11.0956 6.83445 10.8669 6.69888L4.02843 2.64648Z"
        stroke={props.color ? props.color : 'white'}
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeWidth={props.strokeWidth}
      />
    </Svg>
  );
}
