import Svg, {Path, G} from 'react-native-svg';
import React from 'react';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export function Running(props) {
  const {isDark} = useValues();
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <G opacity="0.8">
        <Path
          d="M24.9998 11.6667C26.8408 11.6667 28.3332 10.1743 28.3332 8.33333C28.3332 6.49238 26.8408 5 24.9998 5C23.1588 5 21.6665 6.49238 21.6665 8.33333C21.6665 10.1743 23.1588 11.6667 24.9998 11.6667Z"
          stroke={isDark ? appColors.white : '#222222'}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M21.0221 13.7782L15.5083 20.6702L22.4004 27.5623L18.9544 35.1435"
          stroke={isDark ? appColors.white : '#222222'}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10.6841 15.8458L16.3289 10.3322L21.0221 13.7782L25.8468 19.292H32.0496"
          stroke={isDark ? appColors.white : '#222222'}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M14.819 26.1838L12.7514 27.5623H7.23779"
          stroke={isDark ? appColors.white : '#222222'}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    </Svg>
  );
}
