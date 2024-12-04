import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';

export function StarIcon(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width={props.width ? props.width : "14"}
      height={props.height ? props.height : "18"}
      viewBox="0 0 16 15"
      fill={props.color ? props.color : "#FFCE1F"}
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M7.99992 1.33331L10.0599 5.50665L14.6666 6.17998L11.3333 9.42665L12.1199 14.0133L7.99992 11.8466L3.87992 14.0133L4.66659 9.42665L1.33325 6.17998L5.93992 5.50665L7.99992 1.33331Z"
        stroke={props.color ? props.color : "#FFCE1F"}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
