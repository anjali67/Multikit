import Svg, {Path} from 'react-native-svg';
import React from 'react';
import appColors from '@theme/appColors';

export function Filter(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z"
        fill="white"
      />
    </Svg>
  );
}
