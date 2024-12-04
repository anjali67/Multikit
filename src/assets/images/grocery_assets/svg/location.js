import Svg, {Path, ClipPath, G, Defs, Rect} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';

export function Location(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <G clip-path="url(#clip0_933_1111)">
        <Path
          d="M8.6665 0.666626L8.66717 2.70796C9.84198 2.85649 10.934 3.39158 11.7713 4.22897C12.6085 5.06636 13.1435 6.15846 13.2918 7.33329H15.3332V8.66663L13.2918 8.66729C13.1433 9.842 12.6083 10.934 11.7711 11.7712C10.9338 12.6085 9.84188 13.1435 8.66717 13.292L8.6665 15.3333H7.33317V13.292C6.15834 13.1436 5.06624 12.6087 4.22885 11.7714C3.39146 10.9341 2.85637 9.8421 2.70784 8.66729L0.666504 8.66663V7.33329H2.70784C2.85623 6.15836 3.39126 5.06618 4.22866 4.22878C5.06606 3.39138 6.15824 2.85635 7.33317 2.70796V0.666626H8.6665ZM7.99984 3.99996C6.93897 3.99996 5.92156 4.42139 5.17141 5.17153C4.42126 5.92168 3.99984 6.93909 3.99984 7.99996C3.99984 9.06083 4.42126 10.0782 5.17141 10.8284C5.92156 11.5785 6.93897 12 7.99984 12C9.0607 12 10.0781 11.5785 10.8283 10.8284C11.5784 10.0782 11.9998 9.06083 11.9998 7.99996C11.9998 6.93909 11.5784 5.92168 10.8283 5.17153C10.0781 4.42139 9.0607 3.99996 7.99984 3.99996ZM7.99984 6.66663C8.35346 6.66663 8.6926 6.8071 8.94265 7.05715C9.19269 7.3072 9.33317 7.64634 9.33317 7.99996C9.33317 8.35358 9.19269 8.69272 8.94265 8.94277C8.6926 9.19282 8.35346 9.33329 7.99984 9.33329C7.64622 9.33329 7.30708 9.19282 7.05703 8.94277C6.80698 8.69272 6.6665 8.35358 6.6665 7.99996C6.6665 7.64634 6.80698 7.3072 7.05703 7.05715C7.30708 6.8071 7.64622 6.66663 7.99984 6.66663Z"
          fill={isDark ? "white" : "#1B1B3E"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_933_1111">
          <Rect width="16" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
