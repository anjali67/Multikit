import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function HotelSearchIcon(props) {
  return (
    <Svg
      width={props.width ? props.width : '21'}
      height={props.height ? props.height : '21'}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M7.35418 12.972C10.4568 12.972 12.972 10.4568 12.972 7.35412C12.972 4.25147 10.4568 1.73627 7.35418 1.73627C4.25152 1.73627 1.73633 4.25147 1.73633 7.35412C1.73633 10.4568 4.25152 12.972 7.35418 12.972Z"
        stroke={props.color ? props.color : '#4A4A4A'}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        opacity="0.4"
        d="M11.2617 11.5532L13.4642 13.75"
        stroke={props.color ? props.color : '#4A4A4A'}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
