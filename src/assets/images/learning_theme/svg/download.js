import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function Download(props) {
  const {isDark} = useValues();
  return (
    <Svg width="19" height="19" viewBox="0 0 18 18" fill="none">
      <Path
        d="M15.75 11.25V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V11.25"
        strokeWidth={'1.2'}
        stroke={props.color ? props.color : '#164150'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.25 7.5L9 11.25L12.75 7.5"
        strokeWidth={'1.2'}
        stroke={props.color ? props.color : '#164150'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9 11.25V2.25"
        strokeWidth={'1.2'}
        stroke={props.color ? props.color : '#164150'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
