import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function Paper(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.7367 2.76196H8.08369C6.02469 2.76196 4.24969 4.43096 4.24969 6.49096V17.204C4.24969 19.38 5.90869 21.115 8.08369 21.115H16.0727C18.1327 21.115 19.8017 19.265 19.8017 17.204V8.03796L14.7367 2.76196Z"
        stroke="#4A4A4A"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.474 2.75024V5.65924C14.474 7.07924 15.623 8.23124 17.042 8.23424C18.359 8.23724 19.706 8.23824 19.797 8.23224"
        stroke="#4A4A4A"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        opacity="0.4"
        d="M14.284 15.5579H8.88699"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12.2425 10.6056H8.88651"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
