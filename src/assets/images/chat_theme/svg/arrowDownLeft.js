import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function ArrowDownLeft(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="17"
      height="22"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M9.91659 4.08334L4.08325 9.91668"
        stroke={
          props.color ? props.color : isDark ? appColors.white : '#384849'
        }
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.91659 9.91668H4.08325V4.08334"
        stroke={
          props.color ? props.color : isDark ? appColors.white : '#384849'
        }
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
