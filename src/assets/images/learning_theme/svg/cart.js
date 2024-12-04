import Svg, {Path, G, Defs, ClipPath, Rect} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function CartIcon(props) {
  const {isDark} = useValues();
  return (
    <Svg width="22" height="22" viewBox="0 0 20 20" fill="none">
      <G clip-path="url(#clip0_125_155)">
        <Path
          d="M7.50008 18.3334C7.96032 18.3334 8.33341 17.9603 8.33341 17.5C8.33341 17.0398 7.96032 16.6667 7.50008 16.6667C7.03984 16.6667 6.66675 17.0398 6.66675 17.5C6.66675 17.9603 7.03984 18.3334 7.50008 18.3334Z"
          stroke="white"
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M16.6666 18.3334C17.1268 18.3334 17.4999 17.9603 17.4999 17.5C17.4999 17.0398 17.1268 16.6667 16.6666 16.6667C16.2063 16.6667 15.8333 17.0398 15.8333 17.5C15.8333 17.9603 16.2063 18.3334 16.6666 18.3334Z"
          stroke="white"
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M0.833252 0.833313H4.16658L6.39992 11.9916C6.47612 12.3753 6.68484 12.7199 6.98954 12.9652C7.29424 13.2105 7.6755 13.3408 8.06658 13.3333H16.1666C16.5577 13.3408 16.9389 13.2105 17.2436 12.9652C17.5483 12.7199 17.757 12.3753 17.8333 11.9916L19.1666 4.99998H4.99992"
          stroke="white"
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_125_155">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
