import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';

export function BackArrow(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width={props.width ? props.width : '8'}
      height={props.height ? props.height : '12'}
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M2.92559 6.00005L7.46309 10.5375L6.16692 11.8337L0.333252 6.00005L6.16692 0.166382L7.46309 1.46255L2.92559 6.00005Z"
        strokeWidth={props.strokeWidth}
        fill={props.color ? props.color : isDark ? 'white' : '#1B1B3E'}
      />
    </Svg>
  );
}
