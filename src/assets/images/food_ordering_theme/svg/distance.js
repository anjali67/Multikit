import Svg, {Path} from 'react-native-svg';
import React from 'react';
import { useValues } from '@App';
import appColors from '@theme/appColors';

export function Distance(props) {
  const {isDark} = useValues()
  return (
    <Svg
      width="11"
      height={props.height ? props.height : '22'}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M6.5 1.5L3.5 0.5M3.5 8.5L0.89487 9.3684C0.70061 9.43315 0.5 9.28855 0.5 9.08375V1.71623C0.5 1.5871 0.58263 1.47245 0.70513 1.43162L3.5 0.5V8.5ZM3.5 8.5L6.5 9.5L3.5 8.5ZM3.5 8.5V0.5V8.5ZM6.5 9.5L9.29485 8.5684C9.41735 8.52755 9.5 8.4129 9.5 8.28375V0.91623C9.5 0.71146 9.2994 0.56687 9.10515 0.631625L6.5 1.5V9.5ZM6.5 9.5V1.5V9.5Z"
        stroke={isDark ? appColors.white : "#433417"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
