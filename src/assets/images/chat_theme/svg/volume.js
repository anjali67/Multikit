import Svg, {Path} from 'react-native-svg';
import React from 'react';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export function Volume(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="20"
      height="26"
      viewBox="0 0 20 26"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M12.5 5.41666L6.81816 9.75H2.27271V16.25H6.81816L12.5 20.5833V5.41666Z"
        stroke={
          props.color ? props.color : isDark ? appColors.white : '#384849'
        }
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
