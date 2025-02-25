import Svg, {Path, G, Defs, ClipPath, Rect} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';

export function Mappin(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <G clip-path="url(#clip0_734_827)">
        <Path
          d="M12.25 5.83333C12.25 9.91667 7 13.4167 7 13.4167C7 13.4167 1.75 9.91667 1.75 5.83333C1.75 4.44095 2.30312 3.10559 3.28769 2.12102C4.27226 1.13646 5.60761 0.583333 7 0.583333C8.39239 0.583333 9.72774 1.13646 10.7123 2.12102C11.6969 3.10559 12.25 4.44095 12.25 5.83333Z"
          stroke="#4A4A4A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M7 7.58333C7.9665 7.58333 8.75 6.79983 8.75 5.83333C8.75 4.86683 7.9665 4.08333 7 4.08333C6.0335 4.08333 5.25 4.86683 5.25 5.83333C5.25 6.79983 6.0335 7.58333 7 7.58333Z"
          stroke="black"
          stroke-opacity="0.4"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_734_827">
          <React width="14" height="14" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
