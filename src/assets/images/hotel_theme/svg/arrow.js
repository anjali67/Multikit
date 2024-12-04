import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';

export function ArrowIcon(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M12.6666 8.5H3.33325"
        stroke={props.color ? props.color : '#4A4A4A'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.99992 13.4583L3.33325 8.5L7.99992 3.54167"
        stroke={props.color ? props.color : '#4A4A4A'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
