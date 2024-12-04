import Svg, {Path, G} from 'react-native-svg';
import React from 'react';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export function Yoga(props) {
  const {isDark} = useValues();
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <G opacity="0.8">
        <Path
          d="M24.2855 25.006L25.7142 28.081C25.7142 28.081 32.1427 29.4463 32.1427 32.6937C32.1427 35 29.2855 35 29.2855 35H21.6665L17.9165 32.9167"
          stroke={isDark ? appColors.white : '#222222'}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M15.7146 25.006L14.286 28.081C14.286 28.081 7.85742 29.4463 7.85742 32.6937C7.85742 35 10.7146 35 10.7146 35H14.1669L17.917 32.9167L22.5003 30"
          stroke={isDark ? appColors.white : '#222222'}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M5 26.5435C5 26.5435 8.57143 25.7748 10.7143 25.006C12.8571 14.2432 19.2857 15.012 20 15.012C20.7143 15.012 27.1428 14.2432 29.2857 25.006C31.4285 25.7748 35 26.5435 35 26.5435"
          stroke={isDark ? appColors.white : '#222222'}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M19.9998 11.6667C21.8408 11.6667 23.3332 10.1743 23.3332 8.33333C23.3332 6.49238 21.8408 5 19.9998 5C18.1588 5 16.6665 6.49238 16.6665 8.33333C16.6665 10.1743 18.1588 11.6667 19.9998 11.6667Z"
          stroke={isDark ? appColors.white : '#222222'}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    </Svg>
  );
}
