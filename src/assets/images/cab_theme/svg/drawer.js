



import Svg, {Path, Rect} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function CabDrawer(props) {
  const {isDark} = useValues();
  return (
    <Svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/Svg">
    <Path d="M23.2758 14H3.72412" stroke={isDark ? appColors.white : "#3E3E3E"} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M23.2758 8H3.72412" stroke={isDark ? appColors.white : "#3E3E3E"} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M23.2758 20H3.72412" stroke={isDark ? appColors.white : "#3E3E3E"} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
    
  );
}


