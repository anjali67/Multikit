import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function Share(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="17"
      height="19"
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M9.20833 10.5H7.79167C6.62972 10.4995 5.48975 10.8354 4.495 11.4712C3.50024 12.107 2.68855 13.0186 2.14767 14.1075C2.13246 13.9054 2.1249 13.7027 2.125 13.5C2.125 9.35775 5.29621 6 9.20833 6V1.875L16.6458 8.25L9.20833 14.625V10.5ZM7.79167 9H10.625V11.481L14.394 8.25L10.625 5.019V7.5H9.20833C8.39393 7.49903 7.58894 7.68436 6.84844 8.04332C6.10795 8.40227 5.44944 8.92637 4.91796 9.57975C5.83264 9.19591 6.80777 8.99919 7.79167 9Z"
        fill={isDark ? appColors.white : '#1B1B3E'}
      />
    </Svg>
  );
}
