


import Svg, {Path,G} from 'react-native-svg';
import React from 'react';
import appColors from '@theme/appColors';

export function Receive(props) {
  return (
    <Svg width={props.width ? props.width : "27"} height={props.height ? props.height : "26"} viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/Svg">
    <G opacity="0.8">
    <Path d="M14.5833 10.8333H20L13.5 17.3333L6.99999 10.8333H12.4167V3.25H14.5833V10.8333ZM4.83332 20.5833H22.1667V13H24.3333V21.6667C24.3333 21.954 24.2192 22.2295 24.016 22.4327C23.8129 22.6359 23.5373 22.75 23.25 22.75H3.74999C3.46267 22.75 3.18712 22.6359 2.98396 22.4327C2.78079 22.2295 2.66666 21.954 2.66666 21.6667V13H4.83332V20.5833Z" fill={props.color ? props.color : "white"}/>
    </G>
    </Svg>
  );
}


