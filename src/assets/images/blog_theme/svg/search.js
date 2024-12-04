import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function BlogSearchIcon(props) {
  return (
    <Svg
      width={props.width ? props.width : '24'}
      height={props.height ? props.height : '25'}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M18.031 16.6312L22.314 20.9132L20.899 22.3282L16.617 18.0452C15.0237 19.3224 13.042 20.0171 11 20.0142C6.032 20.0142 2 15.9822 2 11.0142C2 6.04616 6.032 2.01416 11 2.01416C15.968 2.01416 20 6.04616 20 11.0142C20.0029 13.0562 19.3082 15.0379 18.031 16.6312ZM16.025 15.8892C17.2941 14.584 18.0029 12.8346 18 11.0142C18 7.14616 14.867 4.01416 11 4.01416C7.132 4.01416 4 7.14616 4 11.0142C4 14.8812 7.132 18.0142 11 18.0142C12.8204 18.017 14.5699 17.3083 15.875 16.0392L16.025 15.8892Z"
        fill={props.color ? props.color : '#222222'}
      />
    </Svg>
  );
}
