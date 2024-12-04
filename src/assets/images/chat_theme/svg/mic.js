import Svg, {Path, Rect, Defs, G, ClipPath} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';

export function Mic(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="21"
      height="39"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <G clip-path="url(#clip0_226_1641)">
        <Path
          d="M0.833496 0.833344L19.1668 19.1667"
          stroke="#384849"
          strokeWidth="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M12.5 7.78333V3.33333C12.5006 2.71335 12.2709 2.11526 11.8553 1.65516C11.4398 1.19506 10.8681 0.90578 10.2512 0.843473C9.63441 0.781166 9.01643 0.95028 8.51726 1.31799C8.0181 1.68569 7.67337 2.22575 7.55 2.83333M7.5 7.5V9.99999C7.50043 10.4941 7.64729 10.9771 7.92203 11.3878C8.19676 11.7985 8.58704 12.1186 9.04359 12.3076C9.50013 12.4967 10.0025 12.5462 10.4871 12.4499C10.9718 12.3536 11.417 12.1158 11.7667 11.7667L7.5 7.5Z"
          stroke="#384849"
          strokeWidth="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M14.1667 14.125C13.3531 14.9554 12.3101 15.5237 11.1713 15.7572C10.0326 15.9906 8.85002 15.8785 7.77541 15.4352C6.70079 14.992 5.78313 14.2377 5.14013 13.2693C4.49714 12.3009 4.15816 11.1624 4.16666 10V8.33334M15.8333 8.33334V10C15.833 10.3437 15.8024 10.6867 15.7417 11.025"
          stroke="#384849"
          strokeWidth="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10 15.8333V19.1667"
          stroke="#384849"
          strokeWidth="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M6.6665 19.1667H13.3332"
          stroke="#384849"
          strokeWidth="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_226_1641">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
