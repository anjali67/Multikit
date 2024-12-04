import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';

export function Blog1(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M15.5 3C16.052 3 16.5 3.448 16.5 4V6H21.5C22.052 6 22.5 6.448 22.5 7V20C22.5 20.552 22.052 21 21.5 21H3.5C2.948 21 2.5 20.552 2.5 20V7C2.5 6.448 2.948 6 3.5 6H8.5V4C8.5 3.448 8.948 3 9.5 3H15.5ZM16.5 8H8.5V19H16.5V8ZM4.5 8V19H6.5V8H4.5ZM14.5 5H10.5V6H14.5V5ZM18.5 8V19H20.5V8H18.5Z"
        fill={props.color ? props.color : "black"}
      />
    </Svg>
  );
}
