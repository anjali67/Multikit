import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function HotelBookingIcon(props) {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M11.6666 1.66667H4.99998C4.55795 1.66667 4.13403 1.84227 3.82147 2.15483C3.50891 2.46739 3.33331 2.89131 3.33331 3.33334V16.6667C3.33331 17.1087 3.50891 17.5326 3.82147 17.8452C4.13403 18.1577 4.55795 18.3333 4.99998 18.3333H15C15.442 18.3333 15.8659 18.1577 16.1785 17.8452C16.4911 17.5326 16.6666 17.1087 16.6666 16.6667V6.66667L11.6666 1.66667Z"
        stroke={props.color ? props.color : '#4A4A4A'}
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.6667 1.66667V6.66667H16.6667"
        stroke={props.color ? props.color : '#4A4A4A'}
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.3334 10.8333H6.66669"
        stroke={props.color ? props.color : '#4A4A4A'}
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.3334 14.1667H6.66669"
        stroke={props.color ? props.color : '#4A4A4A'}
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.33335 7.5H7.50002H6.66669"
        stroke={props.color ? props.color : '#4A4A4A'}
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
