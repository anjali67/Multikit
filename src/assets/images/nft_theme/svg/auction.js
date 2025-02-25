import Svg, {Path, G} from 'react-native-svg';
import React from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export function Auction(props) {
  const {isDark} = useValues();
  return (
    <Svg width="21" height="36" viewBox="0 0 24 24">
      <G>
        <Path fill="none" d="M0 0h24v24H0z" />
        <Path
          d="M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z"
          fill={props.color ? props.color : appColors.blackColor}
        />
      </G>
    </Svg>
  );
}
