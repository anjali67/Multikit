

import Svg, {Path} from 'react-native-svg';
import React from 'react';
import appColors from '@theme/appColors';

export function Scanner(props) {
  return (
  <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/Svg">
<Path d="M17.5 3.5H24.5V9.33333H22.1667V5.83333H17.5V3.5ZM10.5 3.5V5.83333H5.83333V9.33333H3.5V3.5H10.5ZM17.5 24.5V22.1667H22.1667V18.6667H24.5V24.5H17.5ZM10.5 24.5H3.5V18.6667H5.83333V22.1667H10.5V24.5ZM3.5 12.8333H24.5V15.1667H3.5V12.8333Z" fill={props.color ? props.color : "white"}/>
</Svg>

  );
}



