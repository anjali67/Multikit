import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default Heart = props => {
  return (
    <Svg
      width={props.width ? props.width : '16'}
      height={props.height ? props.height : '15'}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M8.00075 1.39673C9.7625 -0.185015 12.485 -0.132515 14.1823 1.56773C15.8788 3.26873 15.9373 5.97774 14.3593 7.74473L7.99925 14.1137L1.64075 7.74473C0.0627545 5.97774 0.122005 3.26424 1.81775 1.56773C3.5165 -0.130265 6.23375 -0.187265 8.00075 1.39673ZM13.1203 2.62749C11.9953 1.50099 10.1803 1.45524 9.00275 2.51274L8.0015 3.41124L6.9995 2.51348C5.81825 1.45449 4.007 1.50098 2.879 2.62898C1.7615 3.74648 1.70525 5.53523 2.735 6.71724L8 11.9905L13.265 6.71798C14.2955 5.53523 14.2393 3.74873 13.1203 2.62749Z"
        fill={props.color ? props.color : 'white'}
      />
    </Svg>
  );
};
