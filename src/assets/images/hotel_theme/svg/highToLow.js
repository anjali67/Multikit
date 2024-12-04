import Svg, {Path, ClipPath, G, Defs, Rect} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';

export function HightToLow(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width={props.width ? props.width : "21"}
      height={props.height ? props.height : "20"}
      viewBox="0 0 21 14"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <G clip-path="url(#clip0_749_516)">
        <Path
          d="M7 0.583313V13.4166"
          stroke={props.color ? props.color : "#A3A3A3"}
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M9.91667 2.91669H5.54167C5.00018 2.91669 4.48088 3.13179 4.09799 3.51468C3.7151 3.89756 3.5 4.41687 3.5 4.95835C3.5 5.49984 3.7151 6.01914 4.09799 6.40203C4.48088 6.78492 5.00018 7.00002 5.54167 7.00002H8.45833C8.99982 7.00002 9.51912 7.21512 9.90201 7.59801C10.2849 7.9809 10.5 8.5002 10.5 9.04169C10.5 9.58317 10.2849 10.1025 9.90201 10.4854C9.51912 10.8683 8.99982 11.0834 8.45833 11.0834H3.5"
          stroke={props.color ? props.color : "#A3A3A3"}
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Path
        d="M16 12V3"
        stroke={props.color ? props.color : "#A3A3A3"}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13 4L16 2L19 4"
        stroke={props.color ? props.color : "#A3A3A3"}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Defs>
        <ClipPath id="clip0_749_516">
          <Rect width="14" height="14" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
