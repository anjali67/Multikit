import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';

export function Cab(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M16.875 15.625H3.125C2.4375 15.625 1.875 15.0625 1.875 14.375V11.875C1.875 10.5 3 9.375 4.375 9.375H15.625C17 9.375 18.125 10.5 18.125 11.875V14.375C18.125 15.0625 17.5625 15.625 16.875 15.625Z"
        stroke={props.color ? props.color : "#3E3E3E"}
        strokeWidth={props.strokeWidth ? props.strokeWidth : 1.2}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.25 9.375H3.75L5 6.5C5.375 5.625 6.25 5 7.25 5H12.6875C13.6875 5 14.5625 5.625 15 6.5L16.25 9.375Z"
        stroke={props.color ? props.color : "#3E3E3E"}
        strokeWidth={props.strokeWidth ? props.strokeWidth : 1.2}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.25 15.625H2.5V16.875C2.5 17.5625 3.0625 18.125 3.75 18.125H5C5.6875 18.125 6.25 17.5625 6.25 16.875V15.625Z"
        stroke={props.color ? props.color : "#3E3E3E"}
        strokeWidth={props.strokeWidth ? props.strokeWidth : 1.2}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.5 15.625H13.75V16.875C13.75 17.5625 14.3125 18.125 15 18.125H16.25C16.9375 18.125 17.5 17.5625 17.5 16.875V15.625Z"
        stroke={props.color ? props.color : "#3E3E3E"}
        strokeWidth={props.strokeWidth ? props.strokeWidth : 1.2}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1.875 8.75H4"
        stroke={props.color ? props.color : "#3E3E3E"}
        strokeWidth={props.strokeWidth ? props.strokeWidth : 1.2}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.25 8.75H18.125"
        stroke={props.color ? props.color : "#3E3E3E"}
        strokeWidth={props.strokeWidth ? props.strokeWidth : 1.2}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.125 15.625H6.875L7.75 13.8125C7.9375 13.375 8.375 13.125 8.875 13.125H11.0625C11.5625 13.125 12 13.375 12.1875 13.8125L13.125 15.625Z"
        stroke={props.color ? props.color : "#3E3E3E"}
        strokeWidth={props.strokeWidth ? props.strokeWidth : 1.2}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.75 12.5H5.625"
        stroke={props.color ? props.color : "#3E3E3E"}
        strokeWidth={props.strokeWidth ? props.strokeWidth : 1.2}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.375 12.5H16.25"
        stroke={props.color ? props.color : "#3E3E3E"}
        strokeWidth={props.strokeWidth ? props.strokeWidth : 1.2}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.5 5H7.5L8 3C8.0625 2.75 8.3125 2.5 8.625 2.5H11.375C11.6875 2.5 11.9375 2.6875 12 3L12.5 5Z"
        stroke={props.color ? props.color : "#3E3E3E"}
        strokeWidth={props.strokeWidth ? props.strokeWidth : 1.2}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
