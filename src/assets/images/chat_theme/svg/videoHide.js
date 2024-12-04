import Svg, {Path, G, Defs, ClipPath, Rect} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';

export function VideoHide(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="27"
      height="42"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <G clip-path="url(#clip0_246_1666)">
        <Path
          d="M28.75 8.75L20 15L28.75 21.25V8.75Z"
          stroke="#384849"
          strokeWidth="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M17.5 6.25H3.75C2.36929 6.25 1.25 7.36929 1.25 8.75V21.25C1.25 22.6307 2.36929 23.75 3.75 23.75H17.5C18.8807 23.75 20 22.6307 20 21.25V8.75C20 7.36929 18.8807 6.25 17.5 6.25Z"
          stroke="#384849"
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M0.9375 1.875L25.3125 26.25"
          stroke="#384849"
          strokeWidth="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_246_1666">
          <Rect width="30" height="30" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
