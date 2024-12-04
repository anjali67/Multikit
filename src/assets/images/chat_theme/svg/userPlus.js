import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function UserPlus(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width={props.width ? props.width : '24'}
      height={props.height ? props.height : '24'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
        stroke={isDark ? appColors.white : '#384849'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.3'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
        stroke={isDark ? appColors.white : '#384849'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.3'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M20 8V14"
        stroke={isDark ? appColors.white : '#384849'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.3'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M23 11H17"
        stroke={isDark ? appColors.white : '#384849'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.3'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
