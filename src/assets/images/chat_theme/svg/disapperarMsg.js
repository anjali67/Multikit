import Svg, {Path, G, Defs, ClipPath, Rect} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function DisappearMsg(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="15"
      height="25"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <G clip-path="url(#clip0_226_1225)">
        <Path
          d="M7.8674 14.6667C11.5222 14.6667 14.4851 11.6819 14.4851 8C14.4851 4.3181 11.5222 1.33333 7.8674 1.33333C4.21258 1.33333 1.24976 4.3181 1.24976 8C1.24976 11.6819 4.21258 14.6667 7.8674 14.6667Z"
          stroke="#384849"
          strokeWidth="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M7.5 4V8L10 9.33333"
          stroke="#384849"
          strokeWidth="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_226_1225">
          <Rect width="15" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
