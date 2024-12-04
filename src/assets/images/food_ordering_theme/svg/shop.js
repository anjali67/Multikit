import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';

export function Shop(props) {
  const {isDark} = useValues();
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/Svg">
    <Path d="M20.4849 3H16.4932L16.9932 8C16.9932 8 17.9932 9 19.4932 9C20.5702 9 21.3035 8.48445 21.6315 8.1937C21.7622 8.07782 21.81 7.90091 21.7813 7.72861L21.0767 3.50136C21.0285 3.21205 20.7782 3 20.4849 3Z" stroke="#433417" strokeWidth="1.8"/>
    <Path d="M16.4932 3L16.9932 8C16.9932 8 15.9932 9 14.4932 9C12.9932 9 11.9932 8 11.9932 8V3H16.4932Z" stroke="#433417" strokeWidth="1.7"/>
    <Path d="M11.9932 3V8C11.9932 8 10.9932 9 9.49316 9C7.99316 9 6.99316 8 6.99316 8L7.49316 3H11.9932Z" stroke="#433417" strokeWidth="1.7"/>
    <Path d="M7.49341 3H3.50168C3.20838 3 2.95807 3.21205 2.90985 3.50136L2.2053 7.72862C2.17659 7.90091 2.22442 8.07782 2.35512 8.1937C2.68304 8.48445 3.41636 9 4.49339 9C5.99339 9 6.99341 8 6.99341 8L7.49341 3Z" stroke="#433417" strokeWidth="1.7"/>
    <Path d="M3 9V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V9" stroke="#433417"  strokeWidth="1.7"/>
    <Path d="M14.8335 21V15C14.8335 13.8954 13.9381 13 12.8335 13H10.8335C9.72893 13 8.8335 13.8954 8.8335 15V21" stroke="#433417"  strokeWidth="1.7" stroke-miterlimit="16"/>
    </Svg>
  );
}


