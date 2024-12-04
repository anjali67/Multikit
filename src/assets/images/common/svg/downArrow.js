import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function DownArrow(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width={props.width ? props.width : '14'}
      height={props.height ? props.height : '8'}
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M6.99977 5.17205L11.9498 0.222046L13.3638 1.63605L6.99977 8.00005L0.635769 1.63605L2.04977 0.222046L6.99977 5.17205Z"
        fill={isDark ? appColors.white : props.color ? props.color : '#1B1B3E'}
      />
    </Svg>
  );
}
