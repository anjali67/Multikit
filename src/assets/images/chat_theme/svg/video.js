import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function Video(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width={props.width ? props.width : '30'}
      height={props.height ? props.height : '49'}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M30.6668 9.33334L21.3335 16L30.6668 22.6667V9.33334Z"
        stroke={
          props.color ? props.color : isDark ? appColors.white : '#384849'
        }
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.2'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.6668 6.66666H4.00016C2.5274 6.66666 1.3335 7.86056 1.3335 9.33332V22.6667C1.3335 24.1394 2.5274 25.3333 4.00016 25.3333H18.6668C20.1396 25.3333 21.3335 24.1394 21.3335 22.6667V9.33332C21.3335 7.86056 20.1396 6.66666 18.6668 6.66666Z"
        stroke={
          props.color ? props.color : isDark ? appColors.white : '#384849'
        }
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.2'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
