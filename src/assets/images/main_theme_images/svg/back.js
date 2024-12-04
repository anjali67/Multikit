import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function Back(props) {
  return (
    <Svg
      width="23"
      height={props.height ? props.height : '23'}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M7.50191 10.5417L12.6424 5.40116L11.2873 4.04608L3.83342 11.5L11.2873 18.9539L12.6424 17.5988L7.50191 12.4583H19.1667V10.5417H7.50191Z"
        fill={props.color ? props.color : 'white'}
      />
    </Svg>
  );
}
