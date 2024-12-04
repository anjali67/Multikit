import Svg, {Path, Rect, ClipPath, Defs, G} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function Wallet(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <G clip-path="url(#clip0_419_1258)">
        <Path
          d="M16 5.6C16 5.6 5.8412 5.6 4 5.6C2.7696 5.6 2 6.8 2 7.6V16.1536C2 17.1736 2.8264 18 3.8464 18H16.1536C17.1732 18 18 17.1736 18 16.1536V7.5384C18 6.5196 17.0196 5.6 16 5.6Z"
          stroke={props.color ? props.color : "#3E3E3E"}
          strokeWidth={props.strokeWidth ? props.strokeWidth : 1}
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M14.8 4.4V3.0632C14.8 1.7308 14.5124 1.3464 12.8592 1.7824C11.6448 2.1028 4.5388 4.0728 4.5388 4.0728C2.3504 4.8976 2.0164 5.5996 2.0164 7.1992L2 8.1812"
          stroke={props.color ? props.color : "#3E3E3E"}
          strokeWidth={props.strokeWidth ? props.strokeWidth : 1}
          stroke-miterlimit="10"
          stroke-linejoin="round"
        />
        <Path
          d="M15.4007 12.8C14.8483 12.8 14.3999 12.3528 14.3999 11.8004C14.3999 11.248 14.8483 10.8 15.4007 10.8C15.9515 10.8 16.3999 11.248 16.3999 11.8004C16.3999 12.3528 15.9515 12.8 15.4007 12.8Z"
          fill={props.color ? props.color : "#3E3E3E"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_419_1258">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
