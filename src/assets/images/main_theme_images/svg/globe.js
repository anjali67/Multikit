import Svg, {Path, G} from 'react-native-svg';
import React from 'react';

export function Globe(props) {
  return (
    <Svg width="21px" height="21px" viewBox="0 0 21 21">
      <G
        fill="none"
        fill-rule="evenodd"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        transform="translate(2 3)">
        <path d="m8 16c4.4380025 0 8-3.5262833 8-7.96428571 0-4.43800246-3.5619975-8.03571429-8-8.03571429-4.43800245 0-8 3.59771183-8 8.03571429 0 4.43800241 3.56199755 7.96428571 8 7.96428571z" />
        <path d="m1 5h14" />
        <path d="m1 11h14" />
        <path d="m8 16c2.2190012 0 4-3.5262833 4-7.96428571 0-4.43800246-1.7809988-8.03571429-4-8.03571429-2.21900123 0-4 3.59771183-4 8.03571429 0 4.43800241 1.78099877 7.96428571 4 7.96428571z" />
      </G>
    </Svg>
  );
}
