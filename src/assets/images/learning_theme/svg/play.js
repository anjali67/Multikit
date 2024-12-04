import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function LearningPlay(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width={props.width ? props.width : '18'}
      height={props.height ? props.height : '18'}
      viewBox="0 0 22 22"
      fill="none">
      <Path
        d="M10.9999 20.1666C16.0625 20.1666 20.1666 16.0626 20.1666 11C20.1666 5.93737 16.0625 1.83331 10.9999 1.83331C5.93731 1.83331 1.83325 5.93737 1.83325 11C1.83325 16.0626 5.93731 20.1666 10.9999 20.1666Z"
        stroke={props.color ? props.color : appColors.learningPlaceholder}
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeWidth={props.strokeWidth}
      />
      <Path
        d="M9.16675 7.33331L14.6667 11L9.16675 14.6666V7.33331Z"
        stroke={props.color ? props.color : appColors.learningPlaceholder}
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeWidth={props.strokeWidth}
      />
    </Svg>
  );
}
