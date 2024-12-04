import Svg, {Path, G, Defs, Rect, ClipPath} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function Phone(props) {
  const {isDark} = useValues();
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <G clip-path="url(#clip0_163_676)">
        <Path
          d="M10.0331 3.33334C10.6843 3.46038 11.2827 3.77884 11.7518 4.24796C12.221 4.71708 12.5394 5.31551 12.6665 5.96667L10.0331 3.33334ZM10.0331 0.666672C11.386 0.816963 12.6475 1.42279 13.6106 2.38468C14.5737 3.34657 15.1811 4.60734 15.3331 5.96L10.0331 0.666672ZM14.6665 11.28V13.28C14.6672 13.4657 14.6292 13.6495 14.5548 13.8196C14.4804 13.9897 14.3713 14.1424 14.2345 14.2679C14.0977 14.3934 13.9362 14.489 13.7603 14.5485C13.5844 14.608 13.398 14.63 13.2131 14.6133C11.1617 14.3904 9.19113 13.6894 7.45979 12.5667C5.84901 11.5431 4.48335 10.1775 3.45979 8.56667C2.33311 6.82747 1.63195 4.84733 1.41313 2.78667C1.39647 2.60232 1.41838 2.41651 1.47746 2.24109C1.53654 2.06566 1.63151 1.90446 1.7563 1.76775C1.8811 1.63104 2.033 1.52181 2.20232 1.44702C2.37164 1.37223 2.55469 1.33351 2.73979 1.33334H4.73979C5.06333 1.33015 5.37699 1.44472 5.6223 1.65569C5.86761 1.86666 6.02784 2.15964 6.07313 2.48C6.15754 3.12005 6.31409 3.74849 6.53979 4.35334C6.62949 4.59195 6.6489 4.85128 6.59573 5.10059C6.54256 5.3499 6.41903 5.57875 6.23979 5.76001L5.39313 6.60667C6.34216 8.2757 7.7241 9.65763 9.39313 10.6067L10.2398 9.76C10.4211 9.58076 10.6499 9.45724 10.8992 9.40407C11.1485 9.3509 11.4078 9.37031 11.6465 9.46C12.2513 9.6857 12.8797 9.84226 13.5198 9.92667C13.8436 9.97236 14.1394 10.1355 14.3508 10.385C14.5622 10.6345 14.6746 10.9531 14.6665 11.28Z"
          stroke={props.color ? props.color : '#164150'}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_163_676">
          <Rect width="16" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
