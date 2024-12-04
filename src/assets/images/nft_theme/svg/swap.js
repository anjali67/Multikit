



import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';

export function Swap(props) {
  const {isDark} = useValues();
  return (
    <Svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/Svg">
    <Path d="M16.05 12.55L21 17.5L16.05 22.45L14.636 21.036L17.172 18.499L4 18.5V16.5H17.172L14.636 13.964L16.05 12.55ZM7.95 2.55L9.364 3.964L6.828 6.5H20V8.5H6.828L9.364 11.036L7.95 12.45L3 7.5L7.95 2.55Z" fill="#FF9C42"/>
    </Svg>
  );
}


