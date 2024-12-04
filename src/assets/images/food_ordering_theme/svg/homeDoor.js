

import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';

export function HomeDoor(props) {
  const {isDark} = useValues();
  return (
    <Svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/Svg">
    <Path d="M9 21H15M9 21H7C4.79086 21 3 19.2091 3 17V10.7076C3 9.3089 3.73061 8.01178 4.92679 7.28682L9.92679 4.25652C11.2011 3.48424 12.7989 3.48424 14.0732 4.25652L19.0732 7.28682C20.2694 8.01178 21 9.3089 21 10.7076V17C21 19.2091 19.2091 21 17 21H15H9ZM9 21V17C9 15.3431 10.3431 14 12 14C13.6569 14 15 15.3431 15 17V21H9Z" stroke="#433417" strokeWidth="1.7" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  );
}

