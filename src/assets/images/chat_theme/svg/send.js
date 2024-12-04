import Svg, {Path, G, Defs, ClipPath, Rect} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';

export function Send(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <G clip-path="url(#clip0_226_768)">
        <Path
          d="M18.3334 1.66669L9.16675 10.8334"
          stroke={props.color ? props.color : 'white'}
          strokeWidth={props.strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M18.3334 1.66669L12.5001 18.3334L9.16675 10.8334L1.66675 7.50002L18.3334 1.66669Z"
          stroke={props.color ? props.color : 'white'}
          strokeWidth={props.strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_226_768">
          <Rect
            width="20"
            height="20"
            fill={props.color ? props.color : 'white'}
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
