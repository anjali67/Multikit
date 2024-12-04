import Svg, {Path, G} from 'react-native-svg';
import React from 'react';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export function FlashLight(props) {
  const {isDark} = useValues();
  return (
    <Svg width="14" height="25" viewBox="0 0 11 11" fill="none">
      <Path
        d="M5.9585 4.125H9.62516L5.04183 11V6.875H1.8335L5.9585 0V4.125ZM5.04183 5.04167V3.30917L3.45233 5.95833H5.9585V7.97225L7.91237 5.04167H5.04183Z"
        fill={isDark ? appColors.white : '#777777'}
      />
    </Svg>
  );
}
