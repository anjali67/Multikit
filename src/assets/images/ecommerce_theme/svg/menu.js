import Svg, {Path} from 'react-native-svg';
import React from 'react';
import appColors from '@theme/appColors';

export function Menu(props) {
  return (
    <Svg
      width={props.width ? props.width : '20'}
      height={props.height ? props.height : '20'}
      viewBox="0 0 20 20"
      fill="none">
      <Path
        d="M10 2.5V4.16667H2.5V2.5H10ZM13.3333 15.8333V17.5H2.5V15.8333H13.3333ZM18.3333 9.16667V10.8333H2.5V9.16667H18.3333Z"
        fill={props.color ? props.color : '#373737'}
      />
    </Svg>
  );
}
