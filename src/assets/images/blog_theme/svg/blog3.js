import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function Blog3(props) {
  return (
    <Svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M20.5 6H23.5V8H22.5V19H23.5V21H1.5V19H2.5V8H1.5V6H4.5V4C4.5 3.73478 4.60536 3.48043 4.79289 3.29289C4.98043 3.10536 5.23478 3 5.5 3H19.5C19.7652 3 20.0196 3.10536 20.2071 3.29289C20.3946 3.48043 20.5 3.73478 20.5 4V6ZM20.5 8H4.5V19H7.5V12H9.5V19H11.5V12H13.5V19H15.5V12H17.5V19H20.5V8ZM6.5 5V6H18.5V5H6.5Z"
        fill={props.color ? props.color : "black"}
      />
    </Svg>
  );
}
