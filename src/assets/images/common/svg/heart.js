import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function HeartIcon(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="20"
      height={props.height ? props.height : '20'}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M16.5 6.64666C16.5 7.80652 16.0546 8.92057 15.2593 9.74467C13.4287 11.6423 11.653 13.621 9.75397 15.4498C9.31867 15.8629 8.62815 15.8478 8.2116 15.416L2.74032 9.74467C1.08656 8.0304 1.08656 5.26292 2.74032 3.54868C4.41033 1.81759 7.13095 1.81759 8.80095 3.54868L8.99985 3.75482L9.1986 3.5488C9.9993 2.71838 11.0898 2.25 12.229 2.25C13.3681 2.25 14.4586 2.71833 15.2593 3.54868C16.0547 4.37284 16.5 5.48683 16.5 6.64666Z"
        stroke={props.color ? props.color : 'white'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.6'}
        stroke-linejoin="round"
      />
    </Svg>
  );
}
