import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
export function SideArrow(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width={props.width ? props.width : '20'}
      height={props.height ? props.height : '20'}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M10.9766 9.99999L6.85156 5.87499L8.0299 4.69666L13.3332 9.99999L8.0299 15.3033L6.85156 14.125L10.9766 9.99999Z"
        fill={props.color ? props.color : isDark ? 'white' : '#1B1B3E'}
        strokeWidth={'1.2'}
      />
    </Svg>
  );
}
