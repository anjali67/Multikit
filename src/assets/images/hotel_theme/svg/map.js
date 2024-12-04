import Svg, {Path} from 'react-native-svg';
import React from 'react';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export function Map(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width={props.width ? props.width : '16'}
      height={props.height ? props.height : '30'}
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M11.375 5.96299C11.375 9.59262 6.5 12.7037 6.5 12.7037C6.5 12.7037 1.625 9.59262 1.625 5.96299C1.625 4.72532 2.13861 3.53833 3.05285 2.66316C3.96709 1.78799 5.20707 1.29633 6.5 1.29633C7.79293 1.29633 9.03291 1.78799 9.94715 2.66316C10.8614 3.53833 11.375 4.72532 11.375 5.96299Z"
        stroke={
          props.color
            ? props.color
            : isDark
            ? appColors.white
            : appColors.reviewText
        }
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeWidth={props.strokeWidth ? props.strokeWidth  : '1.2'}
      />
      <Path
        d="M6.5 7.51852C7.39746 7.51852 8.125 6.82207 8.125 5.96297C8.125 5.10386 7.39746 4.40741 6.5 4.40741C5.60254 4.40741 4.875 5.10386 4.875 5.96297C4.875 6.82207 5.60254 7.51852 6.5 7.51852Z"
        stroke={
          props.color ? props.color : isDark ? appColors.white : '#A3A3A3'
        }
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeWidth={props.strokeWidth ? props.strokeWidth  : '1.2'}
      />
    </Svg>
  );
}
