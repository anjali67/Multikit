import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function Search(props) {
  return (
    <Svg
      width={props.width ? props.width : '40'}
      height={props.height ? props.height : '23'}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M10.5417 18.2083C14.7759 18.2083 18.2083 14.7759 18.2083 10.5417C18.2083 6.30748 14.7759 2.875 10.5417 2.875C6.30748 2.875 2.875 6.30748 2.875 10.5417C2.875 14.7759 6.30748 18.2083 10.5417 18.2083Z"
        stroke={props.color ? props.color : '#384849'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.2'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M20.125 20.125L15.9563 15.9562"
        stroke={props.color ? props.color : '#384849'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.2'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
