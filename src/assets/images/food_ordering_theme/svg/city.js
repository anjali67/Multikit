

import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function City(props) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill={props.color ? props.color : "#433417"  } xmlns="http://www.w3.org/2000/Svg">
    <Path d="M7 9.01L7.01 8.99889" stroke="#433417" strokeWidth="1.7" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M11 9.01L11.01 8.99889" stroke="#433417" strokeWidth="1.7" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M7 13.01L7.01 12.9989" stroke="#433417" strokeWidth="1.7" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M11 13.01L11.01 12.9989" stroke="#433417" strokeWidth="1.7" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M7 17.01L7.01 16.9989" stroke="#433417" strokeWidth="1.7" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M11 17.01L11.01 16.9989" stroke="#433417" strokeWidth="1.7" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M15 17H17M15 21H3.6C3.26863 21 3 20.7314 3 20.4V5.6C3 5.26863 3.26863 5 3.6 5H9V3.6C9 3.26863 9.26863 3 9.6 3H14.4C14.7314 3 15 3.26863 15 3.6V9V21ZM15 21H20.4C20.7314 21 21 20.7314 21 20.4V9.6C21 9.26863 20.7314 9 20.4 9H15V21ZM15 21V17V21ZM15 9V13V9ZM15 13H17H15ZM15 13V17V13Z" stroke="#433417" strokeWidth="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
    
  );
}

