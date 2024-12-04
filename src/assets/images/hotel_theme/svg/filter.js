import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function Filter(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="14"
      height="32"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.86954 1C1.38949 1 1 1.39604 1 1.88356V2.40358C1 2.76471 1.13733 3.11199 1.38298 3.3732L4.07506 6.23574L4.07624 6.23393C4.59595 6.76599 4.88836 7.48524 4.88836 8.23518V10.7751C4.88836 10.9448 5.06594 11.0532 5.21333 10.9731L6.74642 10.1377C6.97786 10.0113 7.12229 9.76575 7.12229 9.49912V8.22855C7.12229 7.48283 7.41056 6.76659 7.92554 6.23574L10.6176 3.3732C10.8627 3.11199 11 2.76471 11 2.40358V1.88356C11 1.39604 10.6111 1 10.1311 1H1.86954Z"
        stroke={isDark ? appColors.white : '#4A4A4A'}
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
