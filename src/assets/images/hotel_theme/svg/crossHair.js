import Svg, {Path, G, Defs, ClipPath, Rect} from 'react-native-svg';
import React from 'react';

export function CrossHair(props) {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <G clip-path="url(#clip0_752_972)">
        <Path
          d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8C14.6666 4.3181 11.6818 1.33333 7.99992 1.33333C4.31802 1.33333 1.33325 4.3181 1.33325 8C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z"
          stroke="#A3A3A3"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M14.6667 8H12"
          stroke="#A3A3A3"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M3.99992 8H1.33325"
          stroke="#A3A3A3"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8 4V1.33333"
          stroke="#A3A3A3"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8 14.6667V12"
          stroke="#A3A3A3"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_752_972">
          <Rect width="16" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
