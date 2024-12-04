import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '../../../../theme/appColors';

export function UserProfileImg(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M16.6666 17.5V15.8333C16.6666 14.9493 16.3155 14.1014 15.6903 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66665C5.78259 12.5 4.93474 12.8512 4.30962 13.4763C3.6845 14.1014 3.33331 14.9493 3.33331 15.8333V17.5"
        stroke={
          props.color ? props.color : isDark ? appColors.white : '#4A4A4A'
        }
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.5'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10 9.16667C11.841 9.16667 13.3334 7.67428 13.3334 5.83333C13.3334 3.99238 11.841 2.5 10 2.5C8.15907 2.5 6.66669 3.99238 6.66669 5.83333C6.66669 7.67428 8.15907 9.16667 10 9.16667Z"
        stroke={
          props.color ? props.color : isDark ? appColors.white : '#4A4A4A'
        }
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.5'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
