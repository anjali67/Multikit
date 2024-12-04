import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default Notification = props => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M15.0001 8.33335C15.0001 7.00727 14.4733 5.7355 13.5356 4.79782C12.5979 3.86014 11.3262 3.33335 10.0001 3.33335C8.674 3.33335 7.40223 3.86014 6.46455 4.79782C5.52687 5.7355 5.00008 7.00727 5.00008 8.33335V15H15.0001V8.33335ZM16.6667 15.5559L17.0001 16C17.0465 16.0619 17.0748 16.1355 17.0817 16.2126C17.0887 16.2897 17.074 16.3671 17.0394 16.4364C17.0048 16.5056 16.9516 16.5638 16.8858 16.6045C16.82 16.6451 16.7441 16.6667 16.6667 16.6667H3.33341C3.25603 16.6667 3.18018 16.6451 3.11436 16.6045C3.04854 16.5638 2.99534 16.5056 2.96074 16.4364C2.92613 16.3671 2.91148 16.2897 2.91843 16.2126C2.92538 16.1355 2.95365 16.0619 3.00008 16L3.33341 15.5559V8.33335C3.33341 6.56524 4.03579 4.86955 5.28604 3.61931C6.53628 2.36907 8.23197 1.66669 10.0001 1.66669C11.7682 1.66669 13.4639 2.36907 14.7141 3.61931C15.9644 4.86955 16.6667 6.56524 16.6667 8.33335V15.5559ZM7.91675 17.5H12.0834C12.0834 18.0526 11.8639 18.5825 11.4732 18.9732C11.0825 19.3639 10.5526 19.5834 10.0001 19.5834C9.44755 19.5834 8.91764 19.3639 8.52694 18.9732C8.13624 18.5825 7.91675 18.0526 7.91675 17.5Z"
        fill={props.color ? props.color : 'white'}
      />
    </Svg>
  );
};
