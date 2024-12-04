import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function Lock(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width={props.width ? props.width : '22'}
      height={props.height ? props.height : '22'}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M17.4167 10.0833H4.58333C3.57081 10.0833 2.75 10.9041 2.75 11.9167V18.3333C2.75 19.3459 3.57081 20.1667 4.58333 20.1667H17.4167C18.4292 20.1667 19.25 19.3459 19.25 18.3333V11.9167C19.25 10.9041 18.4292 10.0833 17.4167 10.0833Z"
        stroke={
          isDark ? appColors.white : props.color ? props.color : '#384849'
        }
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.2'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.4165 10.0833V6.41667C6.4165 5.20109 6.89939 4.03531 7.75893 3.17576C8.61847 2.31622 9.78426 1.83334 10.9998 1.83334C12.2154 1.83334 13.3812 2.31622 14.2407 3.17576C15.1003 4.03531 15.5832 5.20109 15.5832 6.41667V10.0833"
        stroke={
          isDark ? appColors.white : props.color ? props.color : '#384849'
        }
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.2'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
