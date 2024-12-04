import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default Order = props => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M16.6667 18.3334H3.33333C3.11232 18.3334 2.90036 18.2456 2.74408 18.0893C2.5878 17.933 2.5 17.721 2.5 17.5V2.50002C2.5 2.27901 2.5878 2.06704 2.74408 1.91076C2.90036 1.75448 3.11232 1.66669 3.33333 1.66669H16.6667C16.8877 1.66669 17.0996 1.75448 17.2559 1.91076C17.4122 2.06704 17.5 2.27901 17.5 2.50002V17.5C17.5 17.721 17.4122 17.933 17.2559 18.0893C17.0996 18.2456 16.8877 18.3334 16.6667 18.3334ZM15.8333 16.6667V3.33335H4.16667V16.6667H15.8333ZM6.66667 5.83335H13.3333V7.50002H6.66667V5.83335ZM6.66667 9.16669H13.3333V10.8334H6.66667V9.16669ZM6.66667 12.5H10.8333V14.1667H6.66667V12.5Z"
        fill={props.color ? props.color : 'white'}
      />
    </Svg>
  );
};
