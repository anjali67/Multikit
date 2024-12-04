import Svg, {Path, Rect} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function Checkbox(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width={props.width ? props.width : '20'}
      height={props.height ? props.height : '20'}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Rect x="0.5" y="0.5" width="17" height="17" rx="2.5" stroke="#BCBCBC" />
    </Svg>
  );
}
