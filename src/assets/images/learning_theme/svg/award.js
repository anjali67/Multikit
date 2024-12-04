import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function Award(props) {
  const {isDark} = useValues();
  return (
    <Svg width="20" height="20" viewBox="0 0 16 16" fill="none">
      <Path
        d="M8.00016 10C10.5775 10 12.6668 7.91067 12.6668 5.33334C12.6668 2.75601 10.5775 0.666672 8.00016 0.666672C5.42283 0.666672 3.3335 2.75601 3.3335 5.33334C3.3335 7.91067 5.42283 10 8.00016 10Z"
        stroke={props.color ? props.color : '#164150'}
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.47317 9.25999L4.6665 15.3333L7.99984 13.3333L11.3332 15.3333L10.5265 9.25333"
        stroke={props.color ? props.color : '#164150'}
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
