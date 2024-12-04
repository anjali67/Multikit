import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function Drawer(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width={props.width ? props.width : '20'}
      height={props.height ? props.height : '20'}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M2.5 3.33337H17.5V5.00004H2.5V3.33337ZM2.5 9.16671H12.5V10.8334H2.5V9.16671ZM2.5 15H17.5V16.6667H2.5V15Z"
        fill={props.color ? props.color : isDark ? appColors.white : '#1B1B3E'}
      />
    </Svg>
  );
}
