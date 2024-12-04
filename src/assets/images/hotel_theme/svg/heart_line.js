import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function HeartLineIcon(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="17"
      height="17"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M13.8933 3.07333C13.5528 2.73267 13.1485 2.46243 12.7036 2.27806C12.2586 2.09368 11.7817 1.99878 11.3 1.99878C10.8183 1.99878 10.3414 2.09368 9.89643 2.27806C9.45146 2.46243 9.04717 2.73267 8.70667 3.07333L8 3.78L7.29333 3.07333C6.60554 2.38554 5.67269 1.99914 4.7 1.99914C3.72731 1.99914 2.79446 2.38554 2.10666 3.07333C1.41887 3.76113 1.03247 4.69398 1.03247 5.66667C1.03247 6.63936 1.41887 7.57221 2.10666 8.26L2.81333 8.96667L8 14.1533L13.1867 8.96667L13.8933 8.26C14.234 7.9195 14.5042 7.51521 14.6886 7.07024C14.873 6.62526 14.9679 6.14833 14.9679 5.66667C14.9679 5.18501 14.873 4.70807 14.6886 4.2631C14.5042 3.81812 14.234 3.41384 13.8933 3.07333V3.07333Z"
        stroke={isDark ? appColors.white : '#4A4A4A'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
