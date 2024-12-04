import Svg, {Path, G, Defs, ClipPath, Rect} from 'react-native-svg';
import React from 'react';

export function ClockOutline(props) {
  return (
    <Svg
      width={props.width ? props.width : '18'}
      height={props.height ? props.height : '18'}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <G clip-path="url(#clip0_456_1177)">
        <Path
          d="M9 4.5V9H13.5"
          stroke={props.color ? props.color : '#BCBCBC'}
          strokeWidth={props.strokeWidth ? props.strokeWidth : 1.5}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
          stroke={props.color ? props.color : '#BCBCBC'}
          strokeWidth={props.strokeWidth ? props.strokeWidth : 1.5}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_456_1177">
          <Rect width="18" height="18" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
