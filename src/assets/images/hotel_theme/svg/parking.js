import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';

export function Parking(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="25"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M8 10H16"
        stroke={isDark ? appColors.white : '#4A4A4A'}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7 14H8"
        stroke={isDark ? appColors.white : '#4A4A4A'}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16 14H17"
        stroke={isDark ? appColors.white : '#4A4A4A'}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7 18H17M3 18V11.4105C3 11.1397 3.05502 10.8716 3.16171 10.6227L5.4805 5.21216C5.79566 4.47679 6.51874 4 7.31879 4H16.6812C17.4813 4 18.2043 4.47679 18.5195 5.21216L20.8383 10.6227C20.945 10.8716 21 11.1397 21 11.4105V18H3ZM3 18V20.4C3 20.7314 3.26863 21 3.6 21H6.4C6.73137 21 7 20.7314 7 20.4V18H3ZM3 18H7H3ZM21 18V20.4C21 20.7314 20.7314 21 20.4 21H17.6C17.2686 21 17 20.7314 17 20.4V18H21ZM21 18H17H21Z"
        stroke={isDark ? appColors.white : '#4A4A4A'}
        stroke-width="1.2"
      />
    </Svg>
  );
}
