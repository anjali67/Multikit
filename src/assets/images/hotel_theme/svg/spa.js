import Svg, {Path, G, Defs, Rect, ClipPath} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';

export function Spa(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="21"
      height="23"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <G clip-path="url(#clip0_772_761)">
        <Path
          d="M9.99973 12.4996C11.3805 12.4996 12.4997 11.3803 12.4997 9.99956C12.4997 8.6189 11.3805 7.49957 9.99973 7.49957C8.61906 7.49957 7.49976 8.6189 7.49976 9.99956C7.49976 11.3803 8.61906 12.4996 9.99973 12.4996Z"
          stroke={isDark ? appColors.white : '#4A4A4A'}
          stroke-miterlimit="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10.8333 7.50001C10.8333 7.50001 11.6666 5.83334 11.6666 4.16668C11.6666 2.50001 9.99992 0.833344 9.99992 0.833344C9.99992 0.833344 8.33325 2.50001 8.33325 4.16668C8.33325 5.83334 9.16659 7.50001 9.16659 7.50001"
          stroke={isDark ? appColors.white : '#4A4A4A'}
          stroke-miterlimit="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M7.49992 9.16665C7.49992 9.16665 5.83325 8.33331 4.16659 8.33331C2.49992 8.33331 0.833252 9.99998 0.833252 9.99998C0.833252 9.99998 2.49992 11.6666 4.16659 11.6666C5.83325 11.6666 7.49992 10.8333 7.49992 10.8333"
          stroke={isDark ? appColors.white : '#4A4A4A'}
          stroke-miterlimit="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10.8333 12.5C10.8333 12.5 11.6666 14.1667 11.6666 15.8333C11.6666 17.5 9.99992 19.1667 9.99992 19.1667C9.99992 19.1667 8.33325 17.5 8.33325 15.8333C8.33325 14.1667 9.16659 12.5 9.16659 12.5"
          stroke={isDark ? appColors.white : '#4A4A4A'}
          stroke-miterlimit="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M12.5 9.16665C12.5 9.16665 14.1667 8.33331 15.8333 8.33331C17.5 8.33331 19.1667 9.99998 19.1667 9.99998C19.1667 9.99998 17.5 11.6666 15.8333 11.6666C14.1667 11.6666 12.5 10.8333 12.5 10.8333"
          stroke={isDark ? appColors.white : '#4A4A4A'}
          stroke-miterlimit="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8.82162 7.64315C8.82162 7.64315 8.23235 5.87539 7.05384 4.69688C5.87534 3.51837 3.51831 3.51837 3.51831 3.51837C3.51831 3.51837 3.51831 5.87539 4.69682 7.0539C5.87534 8.23241 7.6431 8.82169 7.6431 8.82169"
          stroke={isDark ? appColors.white : '#4A4A4A'}
          stroke-miterlimit="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M7.64286 11.1785C7.64286 11.1785 5.87509 11.7678 4.69658 12.9463C3.51807 14.1248 3.51807 16.4819 3.51807 16.4819C3.51807 16.4819 5.87509 16.4819 7.0536 15.3034C8.23212 14.1248 8.82134 12.357 8.82134 12.357"
          stroke={isDark ? appColors.white : '#4A4A4A'}
          stroke-miterlimit="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M12.357 11.1785C12.357 11.1785 14.1247 11.7678 15.3032 12.9463C16.4817 14.1248 16.4817 16.4819 16.4817 16.4819C16.4817 16.4819 14.1247 16.4819 12.9462 15.3034C11.7677 14.1248 11.1785 12.357 11.1785 12.357"
          stroke={isDark ? appColors.white : '#4A4A4A'}
          stroke-miterlimit="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M11.1785 7.64315C11.1785 7.64315 11.7677 5.87539 12.9462 4.69688C14.1247 3.51837 16.4818 3.51837 16.4818 3.51837C16.4818 3.51837 16.4818 5.87539 15.3033 7.0539C14.1247 8.23241 12.357 8.82169 12.357 8.82169"
          stroke={isDark ? appColors.white : '#4A4A4A'}
          stroke-miterlimit="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_772_761">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
