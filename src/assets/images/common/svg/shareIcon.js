import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';

export function ShareIcon(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width={props.width ? props.width : '20'}
      height={props.height ? props.height : '20'}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M13.5 16.5C14.7427 16.5 15.75 15.4927 15.75 14.25C15.75 13.0073 14.7427 12 13.5 12C12.2573 12 11.25 13.0073 11.25 14.25C11.25 15.4927 12.2573 16.5 13.5 16.5Z"
        stroke={props.color ? props.color : 'white'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '2.6'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.5 6C14.7427 6 15.75 4.99264 15.75 3.75C15.75 2.50736 14.7427 1.5 13.5 1.5C12.2573 1.5 11.25 2.50736 11.25 3.75C11.25 4.99264 12.2573 6 13.5 6Z"
        stroke={props.color ? props.color : 'white'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '2.6'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.5 11.25C5.74264 11.25 6.75 10.2427 6.75 9C6.75 7.75732 5.74264 6.75 4.5 6.75C3.25736 6.75 2.25 7.75732 2.25 9C2.25 10.2427 3.25736 11.25 4.5 11.25Z"
        stroke={props.color ? props.color : 'white'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '2.6'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.625 4.875L6.375 7.875"
        stroke={props.color ? props.color : 'white'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '2.6'}
      />
      <Path
        d="M6.375 10.125L11.625 13.125"
        stroke={props.color ? props.color : 'white'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '2.6'}
      />
    </Svg>
  );
}
