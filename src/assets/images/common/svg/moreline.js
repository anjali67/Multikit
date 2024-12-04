import Svg, {Path} from 'react-native-svg';
import React from 'react';
import appColors from '@theme/appColors';

export function MoreLine(props) {
  return (
    <Svg
      width="20"
      height="26"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M9 2.25C8.38125 2.25 7.875 2.75625 7.875 3.375C7.875 3.99375 8.38125 4.5 9 4.5C9.61875 4.5 10.125 3.99375 10.125 3.375C10.125 2.75625 9.61875 2.25 9 2.25ZM9 13.5C8.38125 13.5 7.875 14.0063 7.875 14.625C7.875 15.2437 8.38125 15.75 9 15.75C9.61875 15.75 10.125 15.2437 10.125 14.625C10.125 14.0063 9.61875 13.5 9 13.5ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
        fill={props.color ? props.color : '#545454'}
        strokeWidth={'3'}
      />
    </Svg>
  );
}
