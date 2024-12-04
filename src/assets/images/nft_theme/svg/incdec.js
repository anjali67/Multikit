import Svg, {Path, ClipPath, Rect, Defs, G} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';

export function Incdec(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="17"
      height="30"
      viewBox="0 0 17 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8.01172 0.666687L14.0117 10.9167H2.01172L8.01172 0.666687Z"
        fill="#777777"
      />
      <G clip-path="url(#clip0_3193_2514)">
        <Path
          d="M8.00148 27.3343L2.02169 17.0725L14.0217 17.0962L8.00148 27.3343Z"
          fill="#777777"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3193_2514">
          <Rect
            width="15"
            height="12"
            fill="white"
            transform="translate(15 28.0148) rotate(-179.887)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
