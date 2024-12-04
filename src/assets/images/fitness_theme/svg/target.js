import Svg, {Path, G} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function Target(props) {
  const {isDark} = useValues();
  return (
    <Svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <G opacity="0.7">
        <Path
          d="M10.4832 9.91666H6.5165C6.04706 9.91666 5.6665 10.2972 5.6665 10.7667V23.2333C5.6665 23.7028 6.04706 24.0833 6.5165 24.0833H10.4832C10.9526 24.0833 11.3332 23.7028 11.3332 23.2333V10.7667C11.3332 10.2972 10.9526 9.91666 10.4832 9.91666Z"
          stroke={isDark ? appColors.white : '#222222'}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M27.4832 9.91666H23.5165C23.047 9.91666 22.6665 10.2972 22.6665 10.7667V23.2333C22.6665 23.7028 23.047 24.0833 23.5165 24.0833H27.4832C27.9527 24.0833 28.3332 23.7028 28.3332 23.2333V10.7667C28.3332 10.2972 27.9527 9.91666 27.4832 9.91666Z"
          stroke={isDark ? appColors.white : '#222222'}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M1.4165 20.4V13.6C1.4165 13.1306 1.79706 12.75 2.2665 12.75H4.8165C5.28594 12.75 5.6665 13.1306 5.6665 13.6V20.4C5.6665 20.8695 5.28594 21.25 4.8165 21.25H2.2665C1.79706 21.25 1.4165 20.8695 1.4165 20.4Z"
          stroke={isDark ? appColors.white : '#222222'}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M32.5835 20.4V13.6C32.5835 13.1306 32.203 12.75 31.7335 12.75H29.1835C28.714 12.75 28.3335 13.1306 28.3335 13.6V20.4C28.3335 20.8695 28.714 21.25 29.1835 21.25H31.7335C32.203 21.25 32.5835 20.8695 32.5835 20.4Z"
          stroke={isDark ? appColors.white : '#222222'}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M11.3335 17H22.6668"
          stroke={isDark ? appColors.white : '#222222'}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    </Svg>
  );
}
