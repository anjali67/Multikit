import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function LearningWishlist(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width={props.width ? props.width : '22'}
      height="22"
      viewBox="0 0 22 22"
      fill="none">
      <Path
        d="M17.4166 19.25L10.9999 14.6667L4.58325 19.25V4.58333C4.58325 4.0971 4.77641 3.63079 5.12022 3.28697C5.46404 2.94315 5.93036 2.75 6.41659 2.75H15.5833C16.0695 2.75 16.5358 2.94315 16.8796 3.28697C17.2234 3.63079 17.4166 4.0971 17.4166 4.58333V19.25Z"
        stroke={props.color ? props.color : '#164150'}
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeWidth={'1.1'}
      />
    </Svg>
  );
}
