import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function BellNotification(props) {
  return (
    <Svg
      width={props.width ? props.width : '18'}
      height={props.height ? props.height : '18'}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M13.6002 8.25C14.0366 12.2816 15.75 13.5 15.75 13.5H2.25C2.25 13.5 4.5 11.9 4.5 6.3C4.5 5.02696 4.97411 3.80606 5.81802 2.90589C6.66193 2.00571 7.80652 1.5 9 1.5C9.25298 1.5 9.50378 1.52272 9.75 1.56712"
        stroke={props.color ? props.color : 'white'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.5'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.25 6C15.4927 6 16.5 4.99264 16.5 3.75C16.5 2.50736 15.4927 1.5 14.25 1.5C13.0073 1.5 12 2.50736 12 3.75C12 4.99264 13.0073 6 14.25 6Z"
        fill={props.bellColor ? props.bellColor : 'white'}
      />
      <Path
        d="M10.2975 15.75C10.1657 15.9773 9.97644 16.166 9.74866 16.2971C9.52096 16.4283 9.26281 16.4974 9.00001 16.4974C8.73721 16.4974 8.47906 16.4283 8.25136 16.2971C8.02366 16.166 7.83436 15.9773 7.70251 15.75"
        stroke={props.color ? props.color : 'white'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.5'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
