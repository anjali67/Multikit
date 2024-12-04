import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';

export function Bbq(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M8.5 14.5L5 22"
        stroke={isDark ? appColors.white : '#4A4A4A'}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8 6C8 6 9 4.9387 9 4C9 2.66667 8 2 8 2"
        stroke={isDark ? appColors.white : '#4A4A4A'}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 6C12 6 13 4.9387 13 4C13 2.66667 12 2 12 2"
        stroke={isDark ? appColors.white : '#4A4A4A'}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16 6C16 6 17 4.9387 17 4C17 2.66667 16 2 16 2"
        stroke={isDark ? appColors.white : '#4A4A4A'}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.5 17.5H7.5"
        stroke={isDark ? appColors.white : '#4A4A4A'}
        stroke-width="1.2"
        stroke-linejoin="round"
      />
      <Path
        d="M15.5 14.5L17.6 19"
        stroke={isDark ? appColors.white : '#4A4A4A'}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.5 22C19.3284 22 20 21.3284 20 20.5C20 19.6716 19.3284 19 18.5 19C17.6716 19 17 19.6716 17 20.5C17 21.3284 17.6716 22 18.5 22Z"
        stroke={isDark ? appColors.white : '#4A4A4A'}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.0001 15C15.6641 15 18.6706 12.185 18.9748 8.59974C19.0028 8.26956 18.7315 8 18.4001 8H5.6001C5.26873 8 4.99742 8.26956 5.02543 8.59974C5.32965 12.185 8.33613 15 12.0001 15Z"
        stroke={isDark ? appColors.white : '#4A4A4A'}
        stroke-width="1.2"
      />
    </Svg>
  );
}
