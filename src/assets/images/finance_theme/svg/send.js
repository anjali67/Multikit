

import Svg, {Path} from 'react-native-svg';
import React from 'react';
import appColors from '@theme/appColors';

export function Send(props) {
  return (
    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/Svg">
    <Path opacity="0.8" d="M2.24351 10.9317C1.64851 10.6925 1.65551 10.3367 2.28317 10.1278L24.5502 2.7055C25.1673 2.50016 25.5208 2.8455 25.3482 3.44983L18.9852 25.7168C18.8102 26.334 18.431 26.362 18.1487 25.7985L12.8333 15.1667L2.24351 10.9317ZM7.94851 10.6983L14.5238 13.3292L18.0705 20.4248L22.2075 5.9465L7.94734 10.6983H7.94851Z" fill={props.color ? props.color : "white"}/>
    </Svg>
  );
}

