import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function LearningUser(props) {
  const {isDark} = useValues();
  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <Path
        d="M18.3334 19.25V17.4167C18.3334 16.4442 17.9471 15.5116 17.2595 14.8239C16.5718 14.1363 15.6392 13.75 14.6667 13.75H7.33341C6.36095 13.75 5.42832 14.1363 4.74069 14.8239C4.05306 15.5116 3.66675 16.4442 3.66675 17.4167V19.25"
        stroke={props.color ? props.color : '#164150'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.9999 10.0833C13.025 10.0833 14.6666 8.44171 14.6666 6.41667C14.6666 4.39162 13.025 2.75 10.9999 2.75C8.97487 2.75 7.33325 4.39162 7.33325 6.41667C7.33325 8.44171 8.97487 10.0833 10.9999 10.0833Z"
        stroke={props.color ? props.color : '#164150'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
