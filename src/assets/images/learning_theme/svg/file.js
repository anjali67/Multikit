import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function File(props) {
  const {isDark} = useValues();
  return (
    <Svg width="21" height="21" viewBox="0 0 18 18" fill="none">
      <Path
        d="M10.5 1.5H4.5C4.10218 1.5 3.72064 1.65804 3.43934 1.93934C3.15804 2.22064 3 2.60218 3 3V15C3 15.3978 3.15804 15.7794 3.43934 16.0607C3.72064 16.342 4.10218 16.5 4.5 16.5H13.5C13.8978 16.5 14.2794 16.342 14.5607 16.0607C14.842 15.7794 15 15.3978 15 15V6L10.5 1.5Z"
        stroke={props.color ? props.color : '#164150'}
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.5 1.5V6H15"
        stroke={props.color ? props.color : '#164150'}
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 9.75H6"
        stroke={props.color ? props.color : '#164150'}
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 12.75H6"
        stroke={props.color ? props.color : '#164150'}
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.5 6.75H6.75H6"
        stroke={props.color ? props.color : '#164150'}
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
