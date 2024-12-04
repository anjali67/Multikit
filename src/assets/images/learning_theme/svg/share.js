import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function LearningShare(props) {
  const {isDark} = useValues();
  return (
    <Svg width="19" height="19" viewBox="0 0 16 16" fill="none">
      <Path
        d="M2.6665 8V13.3333C2.6665 13.687 2.80698 14.0261 3.05703 14.2761C3.30708 14.5262 3.64622 14.6667 3.99984 14.6667H11.9998C12.3535 14.6667 12.6926 14.5262 12.9426 14.2761C13.1927 14.0261 13.3332 13.687 13.3332 13.3333V8"
        stroke={props.color ? props.color : '#164150'}
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.6668 3.99999L8.00016 1.33333L5.3335 3.99999"
        stroke={props.color ? props.color : '#164150'}
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8 1.33333V10"
        stroke={props.color ? props.color : '#164150'}
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
