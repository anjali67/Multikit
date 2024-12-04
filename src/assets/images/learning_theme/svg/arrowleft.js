import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function ArrowLeft(props) {
  const {isDark} = useValues();
  return (
    <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
      <Path
        d="M18.9912 12.4036H4.99121"
        stroke={props.color ? props.color : 'white'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.9912 19.4036L4.99121 12.4036L11.9912 5.40356"
        stroke={props.color ? props.color : 'white'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
