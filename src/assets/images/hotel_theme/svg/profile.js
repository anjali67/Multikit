import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function HotelProfileIcon(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9848 15.3462C8.11719 15.3462 4.81433 15.931 4.81433 18.2729C4.81433 20.6148 8.09624 21.2205 11.9848 21.2205C15.8524 21.2205 19.1543 20.6348 19.1543 18.2938C19.1543 15.9529 15.8734 15.3462 11.9848 15.3462Z"
        stroke={props.color ? props.color : '#4A4A4A'}
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        opacity="0.4"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9848 12.0059C14.5229 12.0059 16.58 9.94779 16.58 7.40969C16.58 4.8716 14.5229 2.81445 11.9848 2.81445C9.4467 2.81445 7.38858 4.8716 7.38858 7.40969C7.38003 9.93922 9.42384 11.9973 11.9524 12.0059H11.9848Z"
        stroke={props.color ? props.color : '#4A4A4A'}
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
