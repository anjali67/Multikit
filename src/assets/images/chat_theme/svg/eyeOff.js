import Svg, {Path,G,Defs,Rect,ClipPath} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';

export function EyeOff(props) {
  const {isDark} = useValues();
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/Svg">
    <G clip-path="url(#clip0_190_583)">
    <Path d="M9.41329 9.41331C9.23019 9.60981 9.00939 9.76741 8.76406 9.87672C8.51873 9.98604 8.25389 10.0448 7.98535 10.0496C7.71681 10.0543 7.45007 10.0049 7.20103 9.9043C6.952 9.80371 6.72577 9.65399 6.53586 9.46408C6.34594 9.27416 6.19622 9.04794 6.09563 8.7989C5.99504 8.54987 5.94564 8.28312 5.95038 8.01458C5.95512 7.74604 6.0139 7.48121 6.12321 7.23587C6.23252 6.99054 6.39013 6.76974 6.58663 6.58664M11.96 11.96C10.8204 12.8286 9.4327 13.3099 7.99996 13.3333C3.33329 13.3333 0.666626 7.99998 0.666626 7.99998C1.49589 6.45457 2.64605 5.10438 4.03996 4.03998L11.96 11.96ZM6.59996 2.82664C7.05885 2.71923 7.52867 2.66554 7.99996 2.66664C12.6666 2.66664 15.3333 7.99998 15.3333 7.99998C14.9286 8.75705 14.446 9.4698 13.8933 10.1266L6.59996 2.82664Z" stroke="#384849" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M0.666626 0.666687L15.3333 15.3334" stroke="#384849" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </G>
    <Defs>
    <ClipPath id="clip0_190_583">
    <Rect width="16" height="16" fill="white"/>
    </ClipPath>
    </Defs>
    </Svg>
  );
}



