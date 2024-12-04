import React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function Stretching(props) {
  const {isDark} = useValues();
  return (
    <Svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <G opacity="0.8">
        <Path
          d="M29.3332 12.8333C31.3583 12.8333 32.9998 11.1917 32.9998 9.16667C32.9998 7.14162 31.3583 5.5 29.3332 5.5C27.3081 5.5 25.6665 7.14162 25.6665 9.16667C25.6665 11.1917 27.3081 12.8333 29.3332 12.8333Z"
          stroke={isDark ? appColors.white : '#222222'}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M9.1665 36.6667L18.1665 35.7064L23.1666 26.1032L25.1666 16.5L16.1665 18.4206L19.1664 22.262"
          stroke={isDark ? appColors.white : '#222222'}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M27.1665 28.0238H31.1665V36.6667"
          stroke={isDark ? appColors.white : '#222222'}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    </Svg>
  );
}
