import Svg, {Path} from 'react-native-svg';
import React from 'react';
import appColors from '@theme/appColors';

export function Settings(props) {
  return (
    <Svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M9 1.17978L16.125 5.53395V14.2423L9 18.5964L1.875 14.2423V5.53395L9 1.17978ZM9 3.00932L3.375 6.44674V13.3295L9 16.7669L14.625 13.3295V6.44674L9 3.00932ZM9 13.0548C8.20435 13.0548 7.44129 12.7212 6.87868 12.1273C6.31607 11.5334 6 10.728 6 9.88811C6 9.04826 6.31607 8.24281 6.87868 7.64894C7.44129 7.05508 8.20435 6.72145 9 6.72145C9.79565 6.72145 10.5587 7.05508 11.1213 7.64894C11.6839 8.24281 12 9.04826 12 9.88811C12 10.728 11.6839 11.5334 11.1213 12.1273C10.5587 12.7212 9.79565 13.0548 9 13.0548ZM9 11.4714C9.39782 11.4714 9.77936 11.3046 10.0607 11.0077C10.342 10.7108 10.5 10.308 10.5 9.88811C10.5 9.46819 10.342 9.06546 10.0607 8.76853C9.77936 8.4716 9.39782 8.30478 9 8.30478C8.60218 8.30478 8.22064 8.4716 7.93934 8.76853C7.65804 9.06546 7.5 9.46819 7.5 9.88811C7.5 10.308 7.65804 10.7108 7.93934 11.0077C8.22064 11.3046 8.60218 11.4714 9 11.4714Z"
        fill={props.color ? props.color : "#C4C4C4"}
      />
    </Svg>
  );
}
