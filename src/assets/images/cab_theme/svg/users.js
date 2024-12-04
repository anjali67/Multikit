import Svg, {Path, Rect, Defs, ClipPath, G} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function Users(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="26"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <G clip-path="url(#clip0_399_473)">
        <Path
          d="M11.3334 14V12.6667C11.3334 11.9595 11.0525 11.2812 10.5524 10.7811C10.0523 10.281 9.37399 10 8.66675 10H3.33341C2.62617 10 1.94789 10.281 1.4478 10.7811C0.9477 11.2812 0.666748 11.9595 0.666748 12.6667V14"
          stroke={props.color ? props.color : '#BCBCBC'}
          strokeWidth={props.strokeWidth ? props.strokeWidth : 1}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M5.99992 7.33336C7.47268 7.33336 8.66659 6.13946 8.66659 4.6667C8.66659 3.19394 7.47268 2.00003 5.99992 2.00003C4.52716 2.00003 3.33325 3.19394 3.33325 4.6667C3.33325 6.13946 4.52716 7.33336 5.99992 7.33336Z"
          stroke={props.color ? props.color : '#BCBCBC'}
          strokeWidth={props.strokeWidth ? props.strokeWidth : 1}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M15.3333 14V12.6667C15.3328 12.0759 15.1362 11.5019 14.7742 11.0349C14.4122 10.5679 13.9053 10.2344 13.3333 10.0867"
          stroke={props.color ? props.color : '#BCBCBC'}
          strokeWidth={props.strokeWidth ? props.strokeWidth : 1}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10.6667 2.0867C11.2404 2.23357 11.7488 2.56717 12.1118 3.03491C12.4749 3.50265 12.672 4.07792 12.672 4.67003C12.672 5.26215 12.4749 5.83742 12.1118 6.30516C11.7488 6.7729 11.2404 7.1065 10.6667 7.25337"
          stroke={props.color ? props.color : '#BCBCBC'}
          strokeWidth={props.strokeWidth ? props.strokeWidth : 1}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_399_473">
          <Rect width="16" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
