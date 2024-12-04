import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function ArrowUpRight(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="17"
      height="23"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M4.08341 9.91667L9.91675 4.08333"
        stroke={isDark ? appColors.white : '#384849'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.08341 4.08333H9.91675V9.91667"
        stroke={isDark ? appColors.white : '#384849'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
