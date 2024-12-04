import Svg, {Path} from 'react-native-svg';
import React from 'react';
import appColors from '@theme/appColors';

export function Flash(props) {
  return (
    <Svg
      width="22"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path d="M13.5 10H20.5L11.5 23V14H4.5L13.5 1V10Z" fill={props.color ? props.color : "#C4C4C4"} />
    </Svg>
  );
}
